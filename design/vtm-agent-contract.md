# VTM Agent Contract · Edition 02

Diese Datei ist die verbindliche Bauanweisung für Websites, SaaS-Oberflächen, redaktionelle Formate und Präsentationen des VersicherungsTech Magazins.

## Markenaufgabe

Das VTM macht komplexe Technologie verständlich – inhaltlich, visuell und technologisch. Jede Oberfläche führt durch **Aussage → Einordnung → Beleg → Handlung**.

## Visuelles Konzept

- Standard ist ein helles Editorial-Tech-System aus Ice `#F3F7FD`, White `#FFFFFF` und Ink `#0F1C3D`.
- Electric `#2468E8` zeigt Aktivität, Navigation, Daten und Fokus.
- Core `#123FA6` dient für robuste Interaktion und starke Kontraste.
- Gold `#D9A53C` markiert ausschließlich Evidenz, einen Spitzenwert oder einen bestätigten Akzent.
- Nachtblau `#0A1638` ist eine kompakte Ankerfläche, kein seitenfüllender Dauerzustand.
- Genau ein blaues Signal-/Laser-Leitmotiv pro Ansicht. Es bündelt Information und führt zum Beleg.
- Keine generischen Gradient-Orbs, Glaskugeln ohne Bedeutung, Neon-Dekoration oder austauschbare SaaS-Ästhetik.

## Typografie

- **Display:** Bricolage Grotesque Regular, nie pauschal fett. Titel, Thesen und große Ziffern.
- **Text/UI:** Instrument Sans Regular. Lauftext, Navigation, Interfaces.
- **Redaktionelle Stimme:** Newsreader ausschließlich kursiv. Zitat, Zweifel, Kontext – nie Fließtext.
- **Struktur:** IBM Plex Mono, versal und gesperrt. Label, Quelle, Zeitraum, Stichprobe, Stand.

## Komponenten

- Karten sind weiß, ruhig, 10–14 px gerundet, mit feinem blauem Streuschatten und genau einem Rahmen.
- Icons folgen einer einfarbigen 1,6-pt-Feather-Logik in Electric auf hellblauen Chips.
- Datenvisualisierungen sind nativ, reduziert und belegt. Gold kennzeichnet nur den Botschaftswert.
- Buttons haben mindestens 44 × 44 CSS-Pixel, sichtbare Fokuszustände und eindeutige Verben.
- Reale Aussagen tragen Quelle, Zeitraum und Stand direkt an der Aussage.

## Bildwelt

Die Bildwelt verbindet helle, kühle High-End-Architektur mit Glas/Stahl, blauen Datenströmen, genau einem goldenen Lichtakzent und – wenn Menschen sichtbar sind – beiläufiger, echter Arbeit. Zulässige Kategorien: Signal Lens, Explain, Evidence, Blue Hour, Team, Hände mit Tablet, Atrium, Rechenzentrum.

Generierte Motive werden als Illustration bezeichnet. Echte Personen und Partnerlogos nur mit Freigabe.

## Bildbewegung

- Header nutzen die freigegebene VTM-Bildwelt als animierte Bildsequenz oder als kurzes, optimiertes Video.
- Bewegung entsteht durch ruhige Überblendungen und minimale Kamerafahrten – nicht durch abstrakte 3D-Szenen.
- Animation ist pausierbar. `prefers-reduced-motion` liefert einen gleichwertigen statischen Zustand.
- Bilder bleiben auch ohne Bewegung verständlich und bieten ausreichend negative Fläche für Text.
- Keine Bewegung nur für Wow-Effekt. Eine Leitbewegung pro Ansicht.

## Accessibility & Qualität

- WCAG 2.2 AA, vollständige Tastaturbedienung, sichtbarer Fokus und 320-px-Reflow.
- Text mindestens 4,5:1; große Schrift und UI/Fokus mindestens 3:1.
- Medien haben intrinsische Maße, sinnvolle Alt-Texte und passende Ladepriorität.
- Vor Veröffentlichung: Build, Typecheck, Lint, Broken Links, Reduced Motion, mobile Ansichten und visuelle Regression prüfen.

## Verbotene Abkürzungen

- kein beliebiger Dark Mode als Markenabkürzung
- keine extra-fetten Displaytexte
- kein Gold als Schmuck
- keine ungekennzeichnete KI-Bildwelt
- keine gleichförmigen Kartenwüsten
- kein neues Muster, wenn eine Systemkomponente existiert
