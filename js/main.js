/* Scroll-Choreografie der Seite: Hero-Einstieg, Zähler der Beleg-Leiste,
   Kapitelwechsel im Scrollytelling und zurückhaltende Reveals.
   Ohne JavaScript bleibt die Seite vollständig lesbar. */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduziert = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nav = document.getElementById('nav');

  /* ----- Navigation: über dem dunklen Hero transparent, danach hell ----- */
  function navAktualisieren() {
    var hero = document.getElementById('hero');
    var grenze = hero ? hero.offsetHeight - 80 : 400;
    nav.classList.toggle('is-hell', window.scrollY > grenze);
  }

  if (!window.gsap || !window.ScrollTrigger) {
    /* Fallback ohne GSAP: alles sofort sichtbar, Nav über Beobachter */
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    new IntersectionObserver(function () { navAktualisieren(); }, { threshold: 0 })
      .observe(document.querySelector('.beleg'));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('gsap-bereit');

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

  /* ----- Scrollytelling: Kapitelwechsel steuert Bild und Rail ----- */
  var bilder = gsap.utils.toArray('.weg__bild');
  var railPunkte = gsap.utils.toArray('.weg__rail-punkt');

  function kapitelAktivieren(index) {
    bilder.forEach(function (bild, i) {
      bild.classList.toggle('is-aktiv', i === index);
    });
    railPunkte.forEach(function (punkt, i) {
      punkt.classList.toggle('is-aktiv', i === index);
    });
  }

  gsap.utils.toArray('.weg__schritt').forEach(function (schritt, index) {
    ScrollTrigger.create({
      trigger: schritt,
      start: 'top 55%',
      end: 'bottom 55%',
      onEnter: function () { kapitelAktivieren(index); },
      onEnterBack: function () { kapitelAktivieren(index); },
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
