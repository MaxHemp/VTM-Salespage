/* Hero-Szene: Partikel ordnen sich vom Marktrauschen zum Signal.
   Erzählt das Leitmotiv des Design Systems ("Aus Marktgeräusch ein
   belastbares Signal") als dezente 3D-Ebene hinter der Headline.
   Degradiert ohne WebGL oder bei reduzierter Bewegung zu einem
   statischen Verlauf (CSS übernimmt). */

import * as THREE from '../assets/vendor/three.module.min.js';

const canvas = document.getElementById('hero-canvas');
const reduziert = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function webglVerfuegbar() {
  try {
    const test = document.createElement('canvas');
    return !!(window.WebGLRenderingContext &&
      (test.getContext('webgl2') || test.getContext('webgl')));
  } catch (fehler) {
    return false;
  }
}

if (canvas && webglVerfuegbar()) {
  initSzene();
} else if (canvas) {
  canvas.remove();
}

function initSzene() {
  const szene = new THREE.Scene();
  const kamera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  kamera.position.set(0, 0, 11);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: 'low-power',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const ANZAHL = 5200;
  const GOLD_ANTEIL = 0.06;

  const startPositionen = new Float32Array(ANZAHL * 3);
  const zielPositionen = new Float32Array(ANZAHL * 3);
  const farben = new Float32Array(ANZAHL * 3);
  const groessen = new Float32Array(ANZAHL);
  const phasen = new Float32Array(ANZAHL);

  /* Token-Farben: Electric 500/400/300/700 und Gold 400 */
  const elektrisch = [
    new THREE.Color('#4A6FFF'),
    new THREE.Color('#7C96FF'),
    new THREE.Color('#A9BAFF'),
    new THREE.Color('#173BC4'),
  ];
  const gold = new THREE.Color('#E7C878');

  for (let i = 0; i < ANZAHL; i += 1) {
    const i3 = i * 3;

    /* Start: ungeordnetes Marktrauschen im ganzen Raum */
    startPositionen[i3] = (Math.random() - 0.5) * 30;
    startPositionen[i3 + 1] = (Math.random() - 0.5) * 18;
    startPositionen[i3 + 2] = (Math.random() - 0.5) * 14;

    /* Ziel: gebündeltes Signalband, das diagonal durchs Bild läuft.
       Ein kleiner Teil der Partikel bildet den goldenen Faden. */
    const t = Math.random();
    const x = (t - 0.5) * 26;
    const istGold = Math.random() < GOLD_ANTEIL;
    const streuung = istGold ? 0.22 : 1.35;
    const band = Math.sin(t * Math.PI * 2.2) * 1.6 + x * 0.16 + 0.6;

    zielPositionen[i3] = x;
    zielPositionen[i3 + 1] = band + (Math.random() - 0.5) * streuung;
    zielPositionen[i3 + 2] = (Math.random() - 0.5) * (istGold ? 0.6 : 3.2);

    const farbe = istGold
      ? gold
      : elektrisch[Math.floor(Math.random() * elektrisch.length)];
    farben[i3] = farbe.r;
    farben[i3 + 1] = farbe.g;
    farben[i3 + 2] = farbe.b;

    groessen[i] = istGold ? 2.6 : 1.1 + Math.random() * 1.5;
    phasen[i] = Math.random() * Math.PI * 2;
  }

  const geometrie = new THREE.BufferGeometry();
  geometrie.setAttribute('position', new THREE.BufferAttribute(startPositionen, 3));
  geometrie.setAttribute('aZiel', new THREE.BufferAttribute(zielPositionen, 3));
  geometrie.setAttribute('aFarbe', new THREE.BufferAttribute(farben, 3));
  geometrie.setAttribute('aGroesse', new THREE.BufferAttribute(groessen, 1));
  geometrie.setAttribute('aPhase', new THREE.BufferAttribute(phasen, 1));

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uZeit: { value: 0 },
      uFortschritt: { value: reduziert ? 1 : 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
    },
    vertexShader: `
      attribute vec3 aZiel;
      attribute vec3 aFarbe;
      attribute float aGroesse;
      attribute float aPhase;
      uniform float uZeit;
      uniform float uFortschritt;
      uniform float uPixelRatio;
      varying vec3 vFarbe;
      varying float vAlpha;

      void main() {
        vFarbe = aFarbe;

        /* Sanfte Eigenbewegung im Rauschen wie im Signal */
        vec3 start = position + vec3(
          sin(uZeit * 0.18 + aPhase) * 0.6,
          cos(uZeit * 0.15 + aPhase * 1.7) * 0.6,
          sin(uZeit * 0.12 + aPhase * 0.9) * 0.4
        );
        vec3 ziel = aZiel + vec3(
          sin(uZeit * 0.35 + aZiel.x * 0.45 + aPhase) * 0.14,
          cos(uZeit * 0.4 + aZiel.x * 0.5) * 0.22,
          0.0
        );

        /* Jedes Partikel kommt leicht versetzt an */
        float lokal = clamp(uFortschritt * 1.25 - fract(aPhase) * 0.25, 0.0, 1.0);
        float weich = lokal * lokal * (3.0 - 2.0 * lokal);
        vec3 pos = mix(start, ziel, weich);

        vec4 sichtPos = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * sichtPos;
        gl_PointSize = aGroesse * uPixelRatio * (26.0 / -sichtPos.z);
        vAlpha = mix(0.3, 0.9, weich) * smoothstep(-18.0, -7.0, sichtPos.z);
      }
    `,
    fragmentShader: `
      varying vec3 vFarbe;
      varying float vAlpha;

      void main() {
        float abstand = length(gl_PointCoord - vec2(0.5));
        float kreis = smoothstep(0.5, 0.08, abstand);
        gl_FragColor = vec4(vFarbe, kreis * vAlpha);
      }
    `,
  });

  const punkte = new THREE.Points(geometrie, material);
  punkte.rotation.z = -0.06;
  /* Das Band läuft rechts von der Headline durchs Bild */
  punkte.position.set(2.4, 0.2, 0);
  szene.add(punkte);

  /* Größe an den Hero anpassen */
  function anpassen() {
    const breite = canvas.clientWidth || canvas.parentElement.clientWidth;
    const hoehe = canvas.clientHeight || canvas.parentElement.clientHeight;
    renderer.setSize(breite, hoehe, false);
    kamera.aspect = breite / hoehe;
    kamera.updateProjectionMatrix();
  }
  anpassen();
  window.addEventListener('resize', anpassen);

  /* Maus-Parallaxe, bewusst zurückhaltend */
  let zielX = 0;
  let zielY = 0;
  if (!reduziert) {
    window.addEventListener('pointermove', (ereignis) => {
      zielX = (ereignis.clientX / window.innerWidth - 0.5) * 0.5;
      zielY = (ereignis.clientY / window.innerHeight - 0.5) * 0.3;
    }, { passive: true });
  }

  const uhr = new THREE.Clock();
  let laeuft = true;

  function bild() {
    if (laeuft) {
      material.uniforms.uZeit.value = uhr.getElapsedTime();
      kamera.position.x += (zielX - kamera.position.x) * 0.03;
      kamera.position.y += (-zielY - kamera.position.y) * 0.03;
      kamera.lookAt(0, 0.4, 0);
      renderer.render(szene, kamera);
    }
    if (!reduziert) requestAnimationFrame(bild);
  }

  /* Rendern pausieren, sobald der Hero aus dem Bild ist */
  const beobachter = new IntersectionObserver((eintraege) => {
    laeuft = eintraege[0].isIntersecting;
  });
  beobachter.observe(canvas.parentElement);

  if (reduziert) {
    material.uniforms.uZeit.value = 4;
    renderer.render(szene, kamera);
  } else {
    bild();
    /* Formierung: Rauschen -> Signal, choreografiert mit der Headline */
    if (window.gsap) {
      window.gsap.to(material.uniforms.uFortschritt, {
        value: 1,
        duration: 3.2,
        delay: 0.45,
        ease: 'power2.inOut',
      });
      /* Beim Scrollen aus dem Hero löst sich das Band leicht auf */
      if (window.ScrollTrigger) {
        window.gsap.to(punkte.position, {
          y: 2.4,
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }
    } else {
      material.uniforms.uFortschritt.value = 1;
    }
  }
}
