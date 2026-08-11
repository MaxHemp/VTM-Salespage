# VTM Salespage

Landingpage des VersicherungsTech Magazins (VTM) für Medien- und
Leistungsangebote. Leitsatz: **„Wir machen Ihr Thema in der
Versicherungswelt sichtbar."**

## Konzept

Die Seite erklärt das Wertversprechen: Das VTM ist als einziges
Medienunternehmen der Branche eine holistische Plattform aus Magazin, App,
Podcast, Events, LinkedIn, Coaching und Ökosystempartnern. Fachwissen trifft
Reichweite.

Der Aufbau folgt dem verbindlichen Prinzip des Design Systems:
**Signal → Kontext → Beleg → Handlung.** Die vier Stationen sind im Hero als
Leitmotiv angelegt und tragen später den gesamten Leistungsteil.

## Verbindliche Vorgaben

Maßgeblich sind die Dateien in `design/`:

- `design/vtm.tokens.json` · VTM Design System, Edition 03
- `design/vtm-agent-contract.md` · VTM Agent Contract, Edition 02

`css/tokens.css` ist die CSS-Fassung dieser Token und die einzige Wertequelle
für Farbe, Typografie, Form und Bewegung. Farben, Schriften und Regeln werden
nicht überschrieben.

Umgesetzte Regeln im Überblick:

- Helles Editorial-Tech-System aus Ice, White und Ink. Nachtblau tritt nur als
  kompakte Ankerfläche auf (Hero-Board, Podcast-Board, Abschluss-Board).
- Display ist Bricolage Grotesque Regular, nie fett. Betonung entsteht über
  Farbe, nicht über Schriftschnitt.
- Newsreader erscheint ausschließlich kursiv als redaktionelle Stimme.
- IBM Plex Mono trägt Struktur: Label, Quelle, Zeitraum, Stand sowie Preise.
- Gold markiert ausschließlich Evidenz: Kennzahlen mit Quelle, den Spitzenwert
  im Reichweitenvergleich und die Station „Beleg".
- Genau ein blaues Signal-Leitmotiv pro Ansicht, eine Leitbewegung pro Ansicht.
- Icons folgen der einfarbigen 1,6-pt-Feather-Logik in Electric auf hellblauen
  Chips.
- WCAG 2.2 AA, sichtbarer Fokus, 320-px-Reflow, `prefers-reduced-motion`
  liefert einen gleichwertigen statischen Zustand.

## Technik

- Statisches HTML, CSS und JavaScript, kein Build nötig
- GSAP mit ScrollTrigger für Streckenfortschritt und ruhige Eintritte,
  lokal unter `assets/vendor/`
- Progressive Enhancement: ohne JavaScript ist die Seite vollständig lesbar
- Preise und Leistungsumfang: Live-Konfigurator
  (angebote.versicherungstech-magazin.de), Stand 11.08.2026

## Offene Punkte

- Rollen der Teammitglieder außer Herausgeber
- Preis für VTM Category Presence, steht aktuell als „auf Anfrage"
- Bildwelt: vier Motive sind generiert, aber noch nicht im Repo. Sie gehören
  nach `assets/img/bildwelt/` und werden als Illustration gekennzeichnet.

## Lokal ansehen

```bash
python3 -m http.server 8000
# http://localhost:8000
```
