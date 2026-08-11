# Konzept · VTM Salespage

**Leitsatz:** „Wir machen Ihr Thema in der Versicherungswelt sichtbar."
**Design-Grundlage:** VTM Design System 5.0 · Signal (`tokens.css` unverändert übernommen)
**Stand:** 11.08.2026

---

## 1 · Aufgabe und Zielgruppe

Die Seite verkauft keine Anzeigenplätze, sondern **fachliche Sichtbarkeit in einer
Branche, die Werbung ignoriert und Einordnung liest**.

| Zielgruppe | Situation | Was die Seite leisten muss |
|---|---|---|
| Technologieanbieter, InsurTechs | Gutes Produkt, kein Zugang zu Versicherern | Zeigen, dass VTM dort steht, wo entschieden wird |
| Beratungen | Austauschbare Expertise-Behauptungen | Belegtes redaktionelles Umfeld statt Selbstlob |
| Versicherer (Marketing/Innovation) | Interne Themen nach außen tragen | Seriöses Umfeld, sichtbare Kennzeichnung |

Alle drei kaufen **Glaubwürdigkeit**. Deshalb steht Vertrauen vor Conversion —
so, wie es Kapitel 12 des Design Systems verlangt.

## 2 · Kernbotschaft: Plattform statt Fachmagazin

Die zentrale Umdeutung der Seite: VTM ist **nicht ein Magazin mit Werbeplätzen**,
sondern eine Plattform mit sechs Kanälen aus einer Redaktion.

1. **Magazin & App** — versicherungstech-magazin.de plus eigener App-Startbildschirm
2. **VTM Briefing** — Newsletter, 6.000+ Empfänger, rund 50 % Öffnungsrate
3. **Insurance Monday** — Podcast, ca. 35.000 Downloads/Monat
4. **LinkedIn-Netzwerk** — VTM-Kanal und Führungskräfte-Profile
5. **Entscheider-Panel & Webinare** — zitierfähige Zahlen, Teilnehmerlisten
6. **Bühne & Netzwerk** — Hamburger Insurance Innovation Day, Partner der Branche

Dieser Block ist bewusst die erste inhaltliche Sektion nach der Argumentation —
er trägt die Hauptbotschaft „viele Stärken, nicht nur ein Fachmagazin".

## 3 · Conversion-Logik

**Eine Hauptaktion auf der ganzen Seite:** „Thema besprechen" (Anker `#kontakt`).
Alles andere ist Nebenweg (Konfigurator, Telefon, E-Mail).

Vier Conversion-Hebel, in dieser Reihenfolge:

1. **Selbst-Qualifizierung durch Preistransparenz.** Alle Preise stehen offen auf
   der Seite — Einzelbausteine ab 750 €, Pakete ab 9.975 €, Jahresprogramme ab
   12.000 €. B2B-Entscheider brechen ab, wenn Preise fehlen; wer weiterliest, ist
   vorqualifiziert.
2. **Einstiegsleiter statt Alles-oder-nichts.** Drei Preisstufen (Start ·
   Thought-Leader · Marktführer) plus Einzelbausteine für den kleinen Test.
3. **Einwandbehandlung vor dem Formular.** Der FAQ-Block räumt die vier realen
   Kaufeinwände ab: Kosten, Einfluss auf Redaktion, Erfolgsmessung, Aufwand.
4. **Risikoumkehr durch Ehrlichkeit.** Die Sektion „Was wir zusagen — und was
   nicht" nennt ausdrücklich, was VTM *nicht* verspricht. Das ist in einer Branche
   voller Reichweiten-Versprechen der stärkste Trust-Hebel — und zugleich
   verbindliche Regel des Design Systems (keine Lead- und Erfolgsversprechen).

**Bewusst nicht eingesetzt:** künstliche Verknappung, Countdown, „Gamechanger"-
Rhetorik, Lead-Versprechen. Alles davon steht auf der Verbotsliste des Systems
und würde die Glaubwürdigkeit zerstören, die hier das eigentliche Produkt ist.

## 4 · Dramaturgie und Rhythmus

Die Seite folgt der Blickführung des Systems — *Was sehe ich? → Warum relevant? →
Warum vertrauen? → Was tun?* — und dem vorgeschriebenen Wechselrhythmus
Text → Bild → Daten → Menschen. Keine Reihe gleicher Karten.

| # | Sektion | Layout | Funktion |
|---|---|---|---|
| 1 | Hero | 7/5 asymmetrisch, linksbündig | Leitsatz, Hauptaktion, Motiv „Signal" |
| 2 | Kennzahlen | Beleg-Streifen, 12 | Erster sichtbarer Beleg mit Quelle |
| 3 | Argumentation | 5/7 | Warum Sichtbarkeit ≠ Lautstärke, Datenbild Rauschen → Signal |
| 4 | Die Plattform | 5/7 | Kernbotschaft: sechs Kanäle, eine Redaktion |
| 5 | Pakete | Preisleiter, Zeilen | Einstieg, mittlere Stufe markiert |
| 6 | Einzelbausteine | `details` + Tabellen | Progressive Offenlegung, volle Preisliste |
| 7 | Jahresprogramme | Zeilen | Große Abschlüsse |
| 8 | Ablauf | 4 Schritte, nummeriert | Aufwandssorge nehmen |
| 9 | Zusagen / keine Zusagen | 7/5 | Risikoumkehr, Kennzeichnungsgrundsatz |
| 10 | Menschen | 7/5, echte Fotos | „Menschen vor abstrakter Marke" |
| 11 | Weitere Geschäftsfelder | Definitionsliste | Plattformbreite über Medien hinaus |
| 12 | FAQ | `details` | Einwandbehandlung |
| 13 | Kontakt | Nachtblau-Anker, 7/5 | Einzige Hauptaktion, Formular + Mensch |

Der Hero ist linksbündig und asymmetrisch; das zentrierte
Badge-Headline-CTA-Muster ist im System ausdrücklich unzulässig.
Nachtblau erscheint nur als **ein** kompakter Anker (Kontakt) — nie als langer
Seitenhintergrund.

## 5 · Sprache

Deutsch, „Sie", aktiv, belegt. Buttons tragen das Verb der Handlung
(„Thema besprechen", „Konfigurator öffnen"). Zahlen tragen Quelle und Stand
direkt bei sich. Unsicherheit wird benannt statt kaschiert.

Nicht verwendet: „revolutionieren", „zukunftsweisend", „innovative Lösungen",
„Gamechanger", „360-Grad", „maßgeschneidert", unbelegte Superlative.

## 6 · Technik und Barrierefreiheit

- Statisches HTML, `tokens.css` als einzige Wertequelle, ein `<style>`-Block
- **Kern ohne JavaScript funktionsfähig** — JS steuert nur Nav-Hervorhebung und
  das Zusammenfalten von Detailgruppen
- WCAG 2.2 AA: Skip-Link, sichtbare Fokusringe (`--sem-fokus-ring`), semantisches
  HTML, `scope` an Tabellenköpfen, 44-px-Touchflächen, Reflow ab 320 px,
  Status nie nur über Farbe
- Bilder mit `width`/`height` gegen Layoutsprünge, `loading="lazy"` unter dem Fold
- Generierte Motive tragen die Mono-Caption „Illustration"
- `prefers-reduced-motion` global über `tokens.css` erzwungen

## 7 · Offene Punkte für die Freigabe

1. **Kennzahlen prüfen.** 6.000+ Empfänger, ~50 % Öffnungsrate, ca. 35.000
   Downloads/Monat stammen aus dem Angebotsdokument. Vor Livegang mit den
   aktuellen Messwerten abgleichen und den Stand in der Quellenzeile anpassen.
2. **Preis „VTM Category Presence"** (ab 35.000 €/Jahr) war in der Vorlage nur
   teilweise lesbar — im Konfigurator gegenprüfen. Im Quelltext markiert.
3. **Formular-Endpunkt.** Das Formular sendet ohne Backend per `mailto`.
   Für den Produktivbetrieb eine echte Empfangsadresse eintragen (siehe README).
4. **Impressum und Datenschutzerklärung** sind als Platzhalter verlinkt.
