# VTM Salespage

Conversion-optimierte Landingpage des **VersicherungsTech Magazins** für
Technologieanbieter, Beratungen und Versicherer.

**Leitsatz:** „Wir machen Ihr Thema in der Versicherungswelt sichtbar."

Das Konzept hinter der Seite — Zielgruppen, Conversion-Logik, Dramaturgie —
steht in [`KONZEPT.md`](KONZEPT.md).

## Dateien

| Pfad | Inhalt |
|---|---|
| `index.html` | Die vollständige Landingpage. Ein einziges HTML mit eingebettetem CSS, kein Build-Schritt. |
| `tokens.css` | Unveränderte Kopie aus dem [VTM Design System 5.0 · Signal](https://github.com/MaxHemp/vtm-design-system). Einzige Wertequelle. |
| `KONZEPT.md` | Konzept und Begründung der Struktur |
| `assets/` | Logos, deklarierte Illustrationsmotive, freigegebene Teamfotos, Partnerlogos |

## Lokal ansehen

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Vor dem Livegang zu erledigen

1. **Kennzahlen prüfen.** 6.000+ Newsletter-Empfänger, rund 50 % Öffnungsrate und
   ca. 35.000 Podcast-Downloads pro Monat stammen aus dem Angebotsdokument vom
   11.08.2026. Aktuelle Messwerte einsetzen und den Stand in der Quellenzeile
   (Abschnitt „Kennzahlen") anpassen.
2. **Preis „VTM Category Presence"** (ab 35.000 €/Jahr) gegen den Konfigurator
   prüfen — im Quelltext mit `<!-- PRÜFEN -->` markiert.
3. **Formular-Endpunkt setzen.** Ohne Backend öffnet das Formular das
   E-Mail-Programm der Besucherin. Für den Produktivbetrieb im `<form>`-Element
   `action`, `method` und `enctype` ersetzen:

   ```html
   <form class="formular" action="https://ihr-endpunkt.example/anfrage" method="post">
   ```

   Die Feldnamen (`Name`, `Unternehmen`, `E-Mail`, `Telefon`, `Thema`,
   `Interesse`, `Nachricht`, `Einwilligung`) bleiben dabei unverändert.
4. **Impressum und Datenschutzerklärung** verlinken — aktuell Platzhalter-Anker
   (`#impressum`, `#datenschutz`).
5. **Schriften selbst hosten.** Die Seite lädt Schibsted Grotesk, Inter,
   Newsreader und IBM Plex Mono über Google Fonts. Für die Produktion als
   subgesetzte WOFF2 mit `font-display: swap` selbst ausliefern — so verlangt es
   Kapitel 22 des Design Systems, und es hilft zugleich der Datenschutzlage.

## Regeln, an die sich die Seite hält

Aus dem Design System 5.0 „Signal", verbindlich:

- Hero linksbündig und asymmetrisch (7/5) — kein zentriertes
  Badge-Headline-CTA-Muster
- **Eine** Hauptaktion auf der ganzen Seite: „Thema besprechen"
- Mindestens ein sichtbarer Beleg mit Quelle und Stand
- Nachtblau nur als **ein** kompakter Anker (Kontakt), nie als langer
  Seitenhintergrund; Gold ausschließlich für Beleg und Quelle
- Wechselnder Rhythmus Text → Bild → Daten → Menschen, keine Reihen gleicher
  Karten
- Keine Erfolgs- oder Lead-Versprechen; Kennzeichnung bezahlter Formate im Layout
- WCAG 2.2 AA: Skip-Link, sichtbare Fokusringe, semantisches HTML, `scope` an
  Tabellenköpfen, 44-px-Touchflächen, Reflow ab 320 px, Status nie nur über Farbe
- Kern ohne JavaScript funktionsfähig; das einzige Skript hebt den aktuellen
  Navigationspunkt hervor

## Herkunft der Inhalte

Leistungen und Preise stammen aus der VTM-Leistungsübersicht vom 11.08.2026
(Quelle: Live-Konfigurator `angebote.versicherungstech-magazin.de`).
Bilder, Logos und Teamfotos stammen aus dem Design-System-Repository.
Die generierten Motive tragen — wie vorgeschrieben — die Caption „Illustration".
