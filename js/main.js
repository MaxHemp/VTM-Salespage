/* Bewegung der Seite. Genau eine Leitbewegung pro Ansicht:
     Ökosystem-Band  laufendes Logoband, pausierbar
     Strecke         Signallinie füllt sich mit dem Scrollfortschritt
   Alles andere sind ruhige Eintritte. Ohne JavaScript und bei
   reduzierter Bewegung ist jede Ansicht statisch gleichwertig. */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- Ökosystem-Band anhalten und fortsetzen ----- */
  (function marqueeControl() {
    var marquee = document.querySelector('.marquee');
    var toggle = document.getElementById('marquee-toggle');
    if (!marquee || !toggle) return;

    var label = toggle.querySelector('.marquee__toggle-text');
    var icon = toggle.querySelector('.marquee__toggle-icon');
    var pauseIcon = icon.innerHTML;
    var playIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" ' +
      'stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';

    toggle.addEventListener('click', function () {
      var paused = marquee.classList.toggle('is-paused');
      toggle.setAttribute('aria-pressed', String(paused));
      label.textContent = paused ? 'Bewegung fortsetzen' : 'Bewegung anhalten';
      icon.innerHTML = paused ? playIcon : pauseIcon;
    });
  })();

  /* ----- Navigation trennt sich sichtbar, sobald gescrollt wird ----- */
  (function navState() {
    var nav = document.getElementById('nav');
    var hero = document.querySelector('.hero');
    if (!nav || !hero) return;

    new IntersectionObserver(function (entries) {
      nav.classList.toggle('is-scrolled', !entries[0].isIntersecting);
    }, { rootMargin: '-72px 0px 0px 0px', threshold: 0 }).observe(hero);
  })();

  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  var stations = Array.prototype.slice.call(document.querySelectorAll('.station'));
  var fill = document.getElementById('track-fill');

  function showEverything() {
    reveals.forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    stations.forEach(function (el) { el.classList.add('is-active'); });
    if (fill) fill.style.transform = 'scaleY(1)';
  }

  if (reduced || !window.gsap || !window.ScrollTrigger) {
    showEverything();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ----- Strecke: die Signallinie folgt dem Lesefortschritt ----- */
  (function trackProgress() {
    var stage = document.querySelector('.track__stage');
    if (!stage || !fill) return;

    gsap.fromTo(fill,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: stage,
          start: 'top 60%',
          end: 'bottom 75%',
          scrub: 0.6,
        },
      });

    stations.forEach(function (station) {
      ScrollTrigger.create({
        trigger: station,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: function () { station.classList.add('is-active'); },
        onEnterBack: function () { station.classList.add('is-active'); },
      });
    });
  })();

  /* ----- Ruhige Eintritte ----- */
  reveals.forEach(function (el) {
    gsap.fromTo(el,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
  });

  /* ----- Reichweitenvergleich wächst einmal ein ----- */
  (function compareBars() {
    var bars = Array.prototype.slice.call(document.querySelectorAll('.compare__bar > span'));
    if (!bars.length) return;
    gsap.fromTo(bars,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.compare', start: 'top 85%', once: true },
      });
  })();
})();
