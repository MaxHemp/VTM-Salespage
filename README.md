# VTM Salespage

Landingpage des **VersicherungsTech Magazins** für Technologieanbieter, Beratungen
und Versicherer.

**Leitsatz:** „Wir machen Ihr Thema in der Versicherungswelt sichtbar."

Das Konzept, die Gestaltungsentscheidungen und die dokumentierten Abweichungen vom
Design System stehen in [`KONZEPT.md`](KONZEPT.md).

## Dateien

| Pfad | Inhalt |
|---|---|
| `index.html` | Die vollständige Seite. Ein HTML mit eingebettetem CSS, kein Build-Schritt. |
| `KONZEPT.md` | Konzept, roter Faden, Farb- und Schriftsystem, Nachrechnung |
| `assets/` | Logos, freigegebene Illustrationsmotive, Teamfotos, Partnerlogos |

Die Seite bringt ihre Token selbst mit und hängt nicht mehr an `tokens.css`.
Werte und Regeln stammen weiterhin aus dem
[VTM Design System 5.0 · Signal](https://github.com/MaxHemp/vtm-design-system),
die Abweichungen sind in `KONZEPT.md` einzeln begründet.

## Lokal ansehen

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Vor dem Livegang zu erledigen

1. **Kennzahlen prüfen.** 6.000+ Newsletter-Empfänger, rund 50 % Öffnungsrate und
   ca. 35.000 Podcast-Downloads im Monat stammen aus dem Angebotsdokument vom
   11.08.2026. Aktuelle Werte einsetzen und den Stand in der Marginalie anpassen.
2. **Preis „VTM Category Presence"** (ab 35.000 € im Jahr) gegen den Konfigurator
   prüfen. Im Quelltext mit `<!-- PRÜFEN -->` markiert.
3. **Formular-Endpunkt setzen.** Ohne Backend öffnet das Formular das
   E-Mail-Programm. Für den Produktivbetrieb im `<form>`-Element `action`, `method`
   und `enctype` ersetzen:

   ```html
   <form class="bogen" action="https://ihr-endpunkt.example/anfrage" method="post">
   ```

   Die Feldnamen (`Name`, `Unternehmen`, `E-Mail`, `Telefon`, `Thema`, `Interesse`,
   `Nachricht`, `Einwilligung`) bleiben dabei unverändert.
4. **Impressum und Datenschutzerklärung** verlinken. Aktuell Platzhalter-Anker
   (`#impressum`, `#datenschutz`).
5. **Schriften selbst hosten.** Die Seite lädt Newsreader, Schibsted Grotesk und
   IBM Plex Mono über Google Fonts. Für die Produktion als subgesetzte WOFF2 mit
   `font-display: swap` selbst ausliefern. Benötigt werden genau sechs Schnitte:
   Newsreader 300 und 400, Schibsted Grotesk 400 und 500, IBM Plex Mono 400 und 500.

## Gestaltungsregeln dieser Seite

Wer hier weiterarbeitet, hält diese sechs Regeln ein. Sie tragen den roten Faden.

1. **Marginalie trägt nur Belege.** Quelle, Stand, Preisbasis, Einschränkung.
   Niemals Werbetext, niemals ein Label über einer Überschrift.
2. **Keine fetten Überschriften.** Newsreader 300 und 400, sonst nichts.
   Hierarchie entsteht über Größe und Weißraum.
3. **Ein Akzent.** Electric markiert Aktion, Link und Reichweite. Gold markiert
   ausschließlich Belege. Sonst gibt es keine Farbe.
4. **Radius 0.** Überall.
5. **Kein Flächenwechsel zwischen Abschnitten.** Getrennt wird durch Maß und Linie.
   Genau ein invertierter Block, am Ende.
6. **Keine Geviertstriche.** Statt `—` einen Punkt, ein Komma oder einen Doppelpunkt.

## Barrierefreiheit und Technik

- WCAG 2.2 AA: alle Textpaare nachgerechnet (Tabelle in `KONZEPT.md`), Skip-Link,
  sichtbare Fokusringe, semantisches HTML, 44-px-Touchflächen, ein `h1`,
  Überschriften ohne Ebenensprünge
- Vollständiger Dunkelmodus über `prefers-color-scheme`
- Ohne JavaScript vollständig sichtbar und bedienbar. Das einzige Skript blendet
  Abschnitte beim Scrollen ein und markiert den aktuellen Navigationspunkt,
  beides über IntersectionObserver, kein Scroll-Listener
- `prefers-reduced-motion` schaltet jede Bewegung ab
- Bilder mit `width`/`height` gegen Layoutsprünge, `loading="lazy"` unter dem Fold
- Kein horizontales Scrollen von 320 bis 1920 px

## Herkunft der Inhalte

Leistungen und Preise stammen aus der VTM-Leistungsübersicht vom 11.08.2026
(Quelle: Live-Konfigurator `angebote.versicherungstech-magazin.de`).
Bilder, Logos und Teamfotos stammen aus dem Design-System-Repository.
Die generierten Motive tragen, wie vorgeschrieben, die Bildlegende „Illustration".
Piktogramme stammen aus [Phosphor Icons](https://phosphoricons.com) (MIT).
