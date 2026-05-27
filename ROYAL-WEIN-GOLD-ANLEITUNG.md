# Royal + Wein + Gold — Theme für weitere Landingpages

Dieses Theme bringt den Look der Hundestuben-Pages (Tierschutz + Hundetrainer)
auf jede beliebige andere HTML-Landingpage — ohne Framework, ohne Build,
ohne npm. Nur pures CSS, Schrift Georgia.

## So baust Du es ein

**Variante A — als externes Stylesheet (sauberste Lösung):**

1. `royal-wein-gold-theme.css` auf den Server legen, wo die Landingpage liegt.
2. Im `<head>` der Landingpage einbinden:

```html
<link rel="stylesheet" href="royal-wein-gold-theme.css">
```

**Variante B — direkt in die Page einbetten:**

Den gesamten Inhalt von `royal-wein-gold-theme.css` zwischen `<style>` und
`</style>` im `<head>` der HTML-Datei einsetzen. So bleibt alles in einer Datei.

## Die wichtigsten Section-Klassen

Pro Section in Deiner Landingpage entscheidest Du, welcher Look:

| Klasse | Hintergrund | Text | Geeignet für |
|---|---|---|---|
| `section-dark-wine` | tiefer Wein-Verlauf | hell | Emotionaler Aufschlag, Leitsatz |
| `section-dark-royal` | tiefer Royal-Blau-Verlauf | hell | Risiko-Themen, Sachliches |
| `section-dark` | Royal+Wein gemischt | hell | Standard-Dark-Section |
| `section-light` | reines Weiß | dunkel | Atempause; Karten explodieren beim Hover zu Wein |

**Tipp:** Wechsele die Sections ab — dunkel, hell, dunkel, hell — damit die
Page rhythmisch wirkt und nicht eintönig wird.

## Beispiel-HTML einer Section

```html
<section class="section-dark-wine">
  <div class="container">
    <div class="section-eyebrow">Unser Leitsatz</div>
    <h2>Tierschutz bedeutet <em>auch Absicherung.</em></h2>
    <div class="divider"></div>
    <p class="lead">
      Ein Aufmacher-Satz mit <strong>fettem gold-bright Text</strong>.
    </p>

    <div class="value-grid">
      <div class="value-card">
        <div class="value-icon">i</div>
        <h3>Karten-Titel</h3>
        <p>Karten-Beschreibung mit <strong>Akzent</strong>.</p>
      </div>
      <div class="value-card">
        <div class="value-icon">ii</div>
        <h3>Karten-Titel</h3>
        <p>Karten-Beschreibung mit <strong>Akzent</strong>.</p>
      </div>
    </div>
  </div>
</section>
```

## Verfügbare Komponenten

Alle Komponenten passen sich automatisch an die Section-Variante an
(hell auf dunkel, dunkel auf hell). Hover-Effekte sind eingebaut.

- **`.value-card`** — Standard-Info-Karte mit Icon-Kreis (`.value-icon`)
- **`.teaser`** — Karte mit nummeriertem Header (`.teaser-num` oder `.num-roman`)
- **`.topic-card`** — wie value-card, andere Klasse für 2. Layout
- **`.step`** — vier kleine Schritt-Karten (Ablauf 1-2-3-4) mit `.step-num`
- **`.flex-option`** — 3-Wahl-Optionen mit `.flex-option-icon`
- **`.faq-item`** — FAQ-Eintrag (h3 + p)
- **`.highlight-banner`** — Pull-Quote-Block mit Wein-Linke-Border und Gold-Anführungszeichen
- **`.btn`** — Gold-Gradient-CTA-Button
- **`.btn-secondary`** — transparenter Button mit Gold-Rand

## Grids

- **`.value-grid`** — Auto-fit, Karten ab 280px Breite
- **`.teaser-grid`** — 3 Spalten
- **`.teaser-grid.cols-2`** — 2 Spalten (für genau 4 Karten als 2×2)
- **`.steps`** — 4 Spalten für die Ablauf-Steps

## Hero (für die erste Section nach dem Header)

```html
<section class="hero">
  <div class="hero-bg"></div>
  <div class="container">
    <h1>Dein <em>Headline</em>.</h1>
    <p class="lead">Untertitel oder Lead-Text.</p>
    <a href="#anfrage" class="btn">
      <span>CTA-Text</span>
      <span class="btn-arrow">→</span>
    </a>
  </div>
</section>
```

In der CSS-Datei das `url('DEIN-HERO-BILD.jpg')` gegen Dein eigenes Bild
tauschen.

## Reveal-Animation (optional)

Wenn Du willst, dass Sections beim Scrollen einfaden, in den `<body>` die
Klasse `js-reveal` setzen und folgendes Script vor `</body>` einfügen:

```html
<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>
```

Dann jeder Section noch die Klasse `reveal` mitgeben:
`<section class="section-dark-wine reveal">`

## Schriftart

Georgia ist Systemfont (überall installiert). Brauchst nichts laden.
Falls Du eine andere Schrift willst, oben in der CSS-Datei das `font-family`
im `body { … }` Block ändern.

## Lizenz / Nutzung

Internes Theme — Natürlich Abgesichert · Otto Boldt.
Für eigene Landingpages des Unternehmens frei verwendbar.
