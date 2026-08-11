/* Scroll-Choreografie der Seite: Hero-Einstieg, Zähler, horizontale
   Bühnen, Insurance-Monday-Equalizer, Signalstärke-Pegel und Reveals.
   Ohne JavaScript bleibt die Seite vollständig lesbar. */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduziert = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nav = document.getElementById('nav');

  /* ----- Equalizer im Insurance-Monday-Abschnitt ----- */
  function equalizerStarten() {
    var canvas = document.getElementById('equalizer');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var breite = 0;
    var hoehe = 0;
    var sichtbar = true;

    function anpassen() {
      breite = canvas.clientWidth;
      hoehe = canvas.clientHeight;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = breite * dpr;
      canvas.height = hoehe * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    anpassen();
    window.addEventListener('resize', anpassen);

    /* Token-Farben: Electric 600 / 500 / 400 */
    var farben = ['#1F4EFF', '#4A6FFF', '#7C96FF'];

    function zeichnen(zeit) {
      ctx.clearRect(0, 0, breite, hoehe);
      var balkenBreite = 10;
      var abstand = 8;
      var anzahl = Math.ceil(breite / (balkenBreite + abstand));
      for (var i = 0; i < anzahl; i += 1) {
        var puls =
          Math.sin(zeit * 1.9 + i * 0.35) * 0.32 +
          Math.sin(zeit * 0.7 + i * 0.11) * 0.4 +
          0.55;
        var h = Math.max(0.06, puls) * hoehe * 0.9;
        ctx.fillStyle = farben[i % farben.length];
        ctx.globalAlpha = 0.28 + 0.3 * Math.max(0, puls);
        var x = i * (balkenBreite + abstand);
        ctx.fillRect(x, hoehe - h, balkenBreite, h);
      }
      ctx.globalAlpha = 1;
    }

    if (reduziert) {
      zeichnen(2.4);
      return;
    }

    new IntersectionObserver(function (eintraege) {
      sichtbar = eintraege[0].isIntersecting;
    }).observe(canvas);

    var start = performance.now();
    function bild(jetzt) {
      if (sichtbar) zeichnen((jetzt - start) / 1000);
      requestAnimationFrame(bild);
    }
    requestAnimationFrame(bild);
  }
  equalizerStarten();

  /* ----- Ohne GSAP: alles sofort sichtbar ----- */
  if (!window.gsap || !window.ScrollTrigger) {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    document.querySelectorAll('.pegel__balken span').forEach(function (el) {
      el.style.transform = 'scaleY(1)';
    });
    var beleg = document.querySelector('.beleg');
    if (beleg) {
      new IntersectionObserver(function (eintraege) {
        nav.classList.toggle('is-hell', eintraege[0].boundingClientRect.top < 80);
      }, { rootMargin: '-80px 0px 0px 0px' }).observe(beleg);
    }
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: '#hero',
    start: 'bottom top+=80',
    onEnter: function () { nav.classList.add('is-hell'); },
    onLeaveBack: function () { nav.classList.remove('is-hell'); },
  });

  if (reduziert) {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    document.querySelectorAll('.pegel__balken').forEach(function (el) {
      el.classList.add('is-aktiv');
    });
    document.querySelectorAll('[data-zaehler]').forEach(function (el) {
      el.textContent = Number(el.getAttribute('data-zaehler')).toLocaleString('de-DE');
    });
    return;
  }

  /* ----- Hero: Worte treten auf, "sichtbar" schärft sich zuletzt ----- */
  var heroWorte = gsap.utils.toArray('.hero__wort');
  gsap.set(heroWorte, { yPercent: 60, opacity: 0 });
  gsap.set('.hero__lead, .hero__aktionen', { y: 24, opacity: 0 });

  var heroAblauf = gsap.timeline({ delay: 0.25 });
  heroAblauf
    .to(heroWorte, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.07,
      ease: 'power3.out',
    })
    .fromTo('.hero__wort--signal',
      { filter: 'blur(10px)', letterSpacing: '0.06em' },
      { filter: 'blur(0px)', letterSpacing: '0em', duration: 1.1, ease: 'power2.out' },
      '-=0.55')
    .add(function () {
      /* Unterstreichung des Signalworts über CSS-Klasse, da GSAP
         Pseudo-Elemente nicht direkt animieren kann */
      var signalWort = document.querySelector('.hero__wort--signal');
      if (signalWort) signalWort.classList.add('is-markiert');
    })
    .to('.hero__lead', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.7')
    .to('.hero__aktionen', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5');

  /* ----- Beleg-Leiste: Zahlen zählen hoch, sobald sichtbar ----- */
  gsap.utils.toArray('[data-zaehler]').forEach(function (el) {
    var ziel = Number(el.getAttribute('data-zaehler'));
    var stand = { wert: 0 };
    el.textContent = '0';
    gsap.to(stand, {
      wert: ziel,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: function () {
        el.textContent = Math.round(stand.wert).toLocaleString('de-DE');
      },
    });
  });

  /* ----- Plattform: vertikales Scrollen wird horizontales Gleiten ----- */
  var mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', function () {
    var spur = document.getElementById('buehnen-spur');
    var huelle = document.getElementById('buehnen');
    if (!spur || !huelle) return;
    var tween = gsap.to(spur, {
      x: function () { return -(spur.scrollWidth - window.innerWidth); },
      ease: 'none',
      scrollTrigger: {
        trigger: huelle,
        start: 'top top',
        end: function () { return '+=' + (spur.scrollWidth - window.innerWidth); },
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    return function () { tween.scrollTrigger && tween.scrollTrigger.kill(); tween.kill(); };
  });

  /* ----- Signalstärke: Pegel wächst mit den Stufen ----- */
  var balken = gsap.utils.toArray('.pegel__balken');
  var pegelWort = document.getElementById('pegel-wort');
  var wortListe = ['Reichweite', 'Inhalte', 'Programme'];

  function pegelAktivieren(index) {
    balken.forEach(function (b, i) {
      b.classList.toggle('is-aktiv', i <= index);
    });
    if (pegelWort) pegelWort.textContent = wortListe[index] || wortListe[0];
  }

  gsap.utils.toArray('.weg__schritt').forEach(function (schritt, index) {
    ScrollTrigger.create({
      trigger: schritt,
      start: 'top 55%',
      end: 'bottom 55%',
      onEnter: function () { pegelAktivieren(index); },
      onEnterBack: function () { pegelAktivieren(index); },
    });
  });

  /* ----- Reveals: Abschnitte treten ruhig auf ----- */
  gsap.utils.toArray('[data-reveal]').forEach(function (el) {
    gsap.fromTo(el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
  });
})();
