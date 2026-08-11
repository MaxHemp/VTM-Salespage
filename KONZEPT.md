# Konzept · VTM Salespage

**Leitsatz:** „Wir machen Ihr Thema in der Versicherungswelt sichtbar."
**Stand:** 11.08.2026

---

## 1 · Design Read

> B2B-Media-Kit-Landingpage für Versicherungs-Entscheider und Technologieanbieter,
> in redaktioneller Publikationssprache, umgesetzt als monochromes Editorial-System
> auf den markeneigenen Schriften.

**Dials:** Variance 8 · Motion 5 · Density 4 · Modus: Overhaul.
Inhalt, Informationsarchitektur und Markenakzent bleiben, die visuelle Sprache ist neu.

**Zielgruppe.** Technologieanbieter, InsurTechs, Beratungen und Versicherer-Marketing.
Alle drei kaufen dasselbe: Glaubwürdigkeit. Deshalb steht Vertrauen vor Conversion.

---

## 2 · Der rote Faden

Ein einziger Gedanke trägt Inhalt, Layout und Technik:

> **Neben jeder Behauptung steht ihr Beleg.**

Das ist die redaktionelle Grundhaltung von VTM, und auf dieser Seite ist es keine
Aussage über die Marke, sondern die Bauform der Seite selbst.

### Inhaltlich

Die Seite ist der Laufweg eines Themas, nicht ein Katalog von Leistungen.
Jeder Abschnitt beantwortet genau eine Frage, in der Reihenfolge, in der sie im
Kopf der Leserin entsteht:

| # | Abschnitt | Frage, die er beantwortet |
|---|---|---|
| 1 | Auftakt | Worum geht es hier? |
| 2 | Partner | Wer arbeitet mit denen? |
| 3 | Versicherer lesen Fachmedien | Warum geht mein Thema sonst unter? |
| 4 | Sechs Kanäle, eine Redaktion | Wo genau taucht es auf? |
| 5 | Was daraus wird | Was bekomme ich, was kostet es? |
| 6 | Wie wir arbeiten | Wie viel Aufwand ist das für mich? |
| 7 | Was wir zusagen, und was nicht | Wo ist der Haken? |
| 8 | Menschen | Mit wem rede ich? |
| 9 | Fragen | Und die Sache, die ich noch nicht gefragt habe? |
| 10 | Anfangen | Wie fange ich an? |

### Visuell

Der Satzspiegel ist zweigeteilt. Links läuft eine schmale Marginalspalte mit, die
**ausschließlich Belege** trägt: Quelle, Stand, Preisbasis, Einschränkung.
Rechts steht die Aussage. Das ist ein echtes redaktionelles Mittel aus dem
Buch- und Zeitungssatz, keine Dekoration, und es zieht sich durch jeden Abschnitt.

Belege stehen dabei durchgehend in Mono und in Gold. Gold erscheint auf der ganzen
Seite an keiner anderen Stelle. Wer die Seite überfliegt, sieht die Beleglage,
bevor er ein Wort gelesen hat.

### Technisch

Ein Raster für die ganze Seite: zwölf Spalten, Marginalie 1 bis 3, Aussage 4 bis 11,
volle Breite 1 bis 12. Kein zweites Layoutsystem, keine Sonderfälle.
Beleg und Aussage liegen erzwungen in derselben Rasterzeile, damit die
Auto-Platzierung die Marginalie nicht nach unten schiebt.

---

## 3 · Gestaltung

### Farbe

Monochrom plus ein gesättigter Akzent. Keine getönten Abschnittsflächen,
kein zweiter Akzent, kein Verlauf.

| Rolle | Hell | Dunkel | Verwendung |
|---|---|---|---|
| Papier | `#FBFBFD` | `#081226` | Grundfläche |
| Tinte | `#0D1C3C` | `#EDF0F6` | Text, invertierter Block |
| Still | `#55617A` | `#A6B0C4` | Fließtext zweiter Ordnung |
| Signal | `#1F4EFF` | `#8FA6FF` | Aktion, Link, Reichweite. Sonst nichts. |
| Beleg | `#8A6512` | `#E7C878` | Ausschließlich Quellen und Marginalien |

Alle Textpaare sind auf WCAG 2.2 AA nachgerechnet (Werte in Abschnitt 6).

### Schrift

Alle drei Schnitte stammen aus dem VTM Design System, aber mit vertauschten Rollen.
Das ist die zentrale gestalterische Entscheidung.

- **Newsreader Light** trägt jede Überschrift. Im Design System ist Newsreader die
  redaktionelle Stimme des Magazins. Hier wird sie zur Verkaufsstimme: Das Medium
  spricht auf seiner eigenen Salespage so, wie es im Heft spricht.
  Ein Serif-Display ist an dieser Stelle nicht Geschmack, sondern Sachlage. VTM ist
  eine Publikation.
- **Schibsted Grotesk** trägt Oberfläche und Fließtext. Eine echte Zeitungsgrotesk,
  entwickelt für einen Medienkonzern. Sie ersetzt Inter vollständig.
- **IBM Plex Mono** trägt ausschließlich Belege, Preise und Kennzahlen.

**Überschriften laufen durchgehend in 300 und 400. Auf der gesamten Seite ist keine
Überschrift fett.** Größe und Weißraum stellen die Hierarchie her, nicht Fettung.

### Form

Radius 0 auf allem: Knöpfe, Eingaben, Bilder, Flächen. Keine Karten, keine Schatten,
keine Rahmen um Inhalte. Getrennt wird durch Haarlinien, Maß und Leerraum.
Ein einziger invertierter Block, ganz am Ende, dort wo gehandelt wird.

### Bewegung

Abschnitte laufen entlang der Leserichtung ein, gestaffelt, über IntersectionObserver.
Das ordnet die Aufmerksamkeit in der Reihenfolge der Argumentation.
Kein Scroll-Listener, kein Parallax, kein Scroll-Hijacking.
Bei `prefers-reduced-motion` und ohne JavaScript steht alles sofort da.

---

## 4 · Conversion-Logik

Eine Hauptaktion auf der ganzen Seite: **„Thema besprechen"**, gleicher Wortlaut in
Kopfzeile, Auftakt und Abschluss. Alles andere ist Nebenweg.

Vier Hebel, in dieser Reihenfolge:

1. **Preistransparenz zur Selbstqualifizierung.** Alle Preise stehen offen, von
   750 € bis 70.000 € im Jahr. Wer weiterliest, ist vorqualifiziert.
2. **Einstiegsleiter statt Alles-oder-nichts.** Drei Kombinationen, drei
   Jahresprogramme, und die vollständige Einzelpreisliste hinter einer Aufklappung.
   Zuerst das Entscheidbare, dann das Nachschlagbare.
3. **Einwandbehandlung vor dem Formular.** Kosten, Einfluss auf die Redaktion,
   Erfolgsmessung, Unentschlossenheit.
4. **Risikoumkehr durch Ehrlichkeit.** Der Abschnitt „Was wir zusagen, und was nicht"
   nennt ausdrücklich, was VTM nicht verspricht. In einer Branche voller
   Reichweitenversprechen ist das der stärkste Vertrauenshebel, und zugleich die
   verbindliche Regel des Design Systems.

Bewusst nicht eingesetzt: künstliche Verknappung, Countdown, Lead-Versprechen,
Zähler, Testimonial-Karussell.

---

## 5 · Abweichungen vom Design System 5.0

Vom Herausgeber freigegeben, hier dokumentiert:

| Regel im System | Abweichung | Begründung |
|---|---|---|
| Schibsted Grotesk als Display, Newsreader nur als Zitatstimme | Newsreader trägt alle Überschriften | Die Seite verkauft ein Magazin. Die Leseschrift ist hier das stärkste Argument. |
| Inter für UI und Fließtext | Schibsted Grotesk übernimmt beides | Inter ist die Standardschrift jeder generischen Landingpage. Schibsted Grotesk ist markeneigen und trägt Fließtext ebenso. |
| Radien `--vtm-radius-*` | Durchgehend 0 | Ein Formsystem statt vier. Presse statt Produkt-UI. |
| Eisblaue Abschnittsflächen | Entfallen | Flächenwechsel ersetzen Hierarchie durch Streifen. Getrennt wird durch Maß. |
| Kicker-Label über jedem Abschnitt | Entfallen | Wiederholte Versal-Labels sind das deutlichste Merkmal generischer Seiten. |
| Nur helle Fläche vorgesehen | Vollständiger Dunkelmodus | `prefers-color-scheme` ist heute eine Erwartung, keine Zusatzleistung. |

Unverändert übernommen: Nachtblau und Electric als Marken- und Aktionsfarbe,
Gold ausschließlich als Belegfarbe, sichtbare Kennzeichnung bezahlter Inhalte,
Deklaration generierter Motive als Illustration, keine Lead- oder Erfolgsversprechen,
WCAG 2.2 AA über allen Markenregeln.

---

## 6 · Nachgerechnet

**Kontraste (WCAG 2.2 AA, gemessen)**

| Paar | Hell | Dunkel |
|---|---|---|
| Tinte auf Papier | 16,3 | 16,4 |
| Still auf Papier | 6,0 | 8,6 |
| Gedämpft auf Papier | 4,5 | 5,0 |
| Signal auf Papier | 5,7 | 8,1 |
| Beleg auf Papier | 5,1 | 11,5 |
| Knopftext auf Signal | 5,9 | 8,1 |
| Formularlabel im Anker | 11,2 | 10,0 |
| Platzhalter im Anker | 7,3 | 5,4 |

**Weitere geprüfte Punkte**

- Kein horizontales Scrollen bei 320, 390, 768, 860, 1024, 1280, 1440 und 1920 px
- Titelzeile zweizeilig ab 768 px, Hauptaktion in jeder Breite ohne Scrollen sichtbar
- Keine fette Überschrift auf der Seite (maschinell geprüft: `font-weight` ≥ 600 = 0 Treffer)
- Null Geviertstriche im gesamten Dokument
- Ein `h1`, Überschriftenebenen ohne Sprünge
- Touchflächen 44 px, Fokusringe sichtbar, Tastaturweg vollständig
- Ohne JavaScript vollständig sichtbar und bedienbar
- Ein Radiussystem (0), ein Akzent, ein invertierter Block

---

## 7 · Offene Punkte für die Freigabe

1. **Kennzahlen prüfen.** 6.000+ Empfänger, rund 50 % Öffnungsrate und
   ca. 35.000 Downloads im Monat stammen aus dem Angebotsdokument vom 11.08.2026.
   Vor Livegang mit aktuellen Messwerten abgleichen und den Stand in der
   Marginalie anpassen.
2. **Preis „VTM Category Presence"** (ab 35.000 € im Jahr) war in der Vorlage nur
   teilweise lesbar. Im Quelltext mit `<!-- PRÜFEN -->` markiert.
3. **Formular-Endpunkt.** Ohne Backend sendet das Formular per `mailto`.
4. **Impressum und Datenschutzerklärung** sind als Platzhalter verlinkt.
5. **Eigene Bildstrecke.** Die Seite nutzt die freigegebenen Motive aus dem
   Design-System-Repository. Motive, die speziell für diese Seite entstehen,
   würden den Auftakt weiter stärken.
