# Hinweise für Claude (Code-Sessions)

Dieses Repo enthält zwei Marketing-Landingpages plus Übersicht — alles in
puren HTML-Dateien, kein Build-Schritt, kein Framework. Bitte respektieren.

## Goldene Regeln

1. **Kein Build-Tool einführen.** Kein webpack, kein Vite, kein React.
   Eine HTML-Datei = eine Page. CSS inline im `<style>`-Block jeder Page.
2. **Keine zusätzlichen npm-Dependencies.** Die Server-Skripte (`_preview.cjs`
   etc.) nutzen nur Node-Standard-Module.
3. **Sektion-Marker beachten.** Jede Page ist mit
   `<!-- ====== SEKTIONS-TAG ====== -->` strukturiert. Das `_reorder-sections.cjs`
   nutzt diese Marker — also nicht entfernen oder umbenennen, wenn du
   Sektionen verschiebst.
4. **Cream-/Weiß-Wechsel.** Sektionen ohne eigenen Hintergrund alternieren
   `class="reveal"` (weiß) und `class="cream reveal"` für visuellen Rhythmus.
   Falls du Sektionen verschiebst, das Alternieren prüfen oder
   `_reorder-sections.cjs` nutzen, das macht es automatisch.
5. **Geradzahlige Card-Counts** in 2-Spalten-Grids: FAQ hat aktuell 6 Items
   (3+3 symmetrisch). 4-Card-Grids nutzen `class="teaser-grid cols-2"`.
6. **Wording-Regeln** (vom Auftraggeber explizit so gewünscht):
   - „Hundestube" statt „Salon" (überall)
   - „Spende" statt „Provision" auf der Tierschutz-Page
   - Auf Hundetrainer-Page: „Provision" nur im Kontext Einzeltrainer:in,
     „Spende" für Hundesportvereine
   - Keine Anglizismen wo deutsche Begriffe existieren: „Logo-Einbindung"
     statt „Co-Branding", „Einrichtung" statt „Setup", „Willkommens-Mappe"
     statt „Welcome-Pack"
   - Eigennamen (WhatsApp, Zoom, Calendly, PDF, MRT, CT, IGP) bleiben
   - **Tierpass-App gibt es nicht** für Hunde/Katzen (nur für Pferde) — also nicht erwähnen
   - **Berufsbezeichnungen wie TFA, Ernährungsberater nicht nennen** — stattdessen
     „unser Team kommt aus den unterschiedlichsten Berufen des Klein-
     und Großtiersektors (Klinik, Beratung, Vereins- und Tierschutzarbeit)"

## Wenn du Sektionen verschieben willst

Nutze das Reorder-Skript:

```bash
node _reorder-sections.cjs
```

Die `order:`-Liste oben im Skript anpassen — Skript schneidet die Sektionen
aus, ordnet sie neu, korrigiert cream/weiß-Alternation. Sektion-Marker müssen
exakt mit der Liste übereinstimmen.

## Tooling im Repo

| Datei | Zweck |
|---|---|
| `_preview.cjs` | Einheitlicher Vorschau-Server (Port 4000), emuliert GitHub Pages |
| `tierschutzverein/_server.cjs` | Einzel-Server für Tierschutz (Port 8089) |
| `hundetrainer/_server.cjs` | Einzel-Server für Hundetrainer (Port 8090) |
| `_reorder-sections.cjs` | Sektionen umsortieren |

## Strategisches Hintergrund-Dokument

`EMPFEHLUNGSKONZEPT-Hunde-2-Pages.md` enthält die Zielgruppen-Frames,
das Provisions-/Spenden-Modell und die Begründungen. **Vor inhaltlichen
Änderungen lesen.**

## Auftraggeber / Kontext

- **Otto Boldt** — Inhaber, „Natürlich Abgesichert"
- **Kim Grönwoldt** — arbeitet mit Claude an diesem Projekt
- Schwester-Projekt: `Webinar-Pferde-OP/` (Pferde-Landingpages — liegt in einem
  Nachbarordner, nicht in diesem Repo)
