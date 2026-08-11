# VTM Salespage

Conversion-optimierte Landingpage des VersicherungsTech Magazins (VTM) für
Medien- und Leistungsangebote. Leitsatz: **„Wir machen Ihr Thema in der
Versicherungswelt sichtbar."**

## Konzept

Die Seite folgt der Leitidee des VTM Design Systems 5.0 „Signal": *Aus
Marktgeräusch ein belastbares Signal.* Der Three.js-Hero formt ungeordnete
Partikel (Marktrauschen) zu einem gebündelten Signalband mit goldenem Faden,
das Scrollytelling führt anschließend durch die Grammatik des Design Systems:
Aussage → Einordnung → Beleg → Handlung.

## Technik

- Statisches HTML/CSS/JS, keine Build-Tools nötig
- `css/tokens.css`: Design Tokens aus dem [VTM Design System 5.0](https://github.com/MaxHemp/vtm-design-system) (einzige Wertequelle)
- Three.js (Partikel-Hero, `js/hero-scene.js`) und GSAP ScrollTrigger
  (Scrollytelling, `js/main.js`), beide lokal unter `assets/vendor/`
- Progressive Enhancement: ohne JavaScript bleibt die Seite vollständig
  lesbar, `prefers-reduced-motion` wird durchgehend respektiert
- Preise und Leistungsumfang: Live-Konfigurator
  (angebote.versicherungstech-magazin.de), Stand 11.08.2026

## Lokal ansehen

```bash
python3 -m http.server 8000
# http://localhost:8000
```
