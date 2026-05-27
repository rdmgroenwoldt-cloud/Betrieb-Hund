# Natürlich Abgesichert — Hundestuben

Online-Hundestuben rund um Hunde- und Katzenversicherung — zwei Landingpages
für unterschiedliche B2B-Zielgruppen, plus eine Übersichts-Seite.

| Page | Zielgruppe | Frame |
|---|---|---|
| [`/`](index.html) | Auswahl-Übersicht | – |
| [`/tierschutzverein/`](tierschutzverein/index.html) | Tierschutzvereine, Tierheime, Pflegestellen | Förder-Kooperation als Spende für die Vereinskasse |
| [`/hundetrainer/`](hundetrainer/index.html) | Hundetrainer, Hundeschulen, Hundesportvereine | Trainer-Partnerschaft oder Vereins-Kooperation |

## Tech-Stack

- **Pures HTML/CSS** — kein Build, kein Framework, kein npm
- **Schrift**: Georgia (System-Font, keine Web-Font-Last)
- **Farbpalette**: Royal/Gold (CSS-Variablen oben in jeder Page)
- **Interaktion**: vanilla JS (IntersectionObserver für Fade-In, Smooth-Scroll)
- **Externe Skripte**: nur Calendly-Widget (optional einbindbar)
- **Bilder**: aktuell von Unsplash via URL — bei Live-Deploy gegen eigene Fotos tauschen

## Lokal anschauen

Es gibt zwei Wege:

### Option A — Vorschau-Server (empfohlen, emuliert GitHub Pages)

```bash
node _preview.cjs
```

Öffnet eine einheitliche Vorschau auf **http://localhost:4000/** — Übersicht
unter `/`, die zwei Landingpages unter `/tierschutzverein/` und `/hundetrainer/`.
Das entspricht exakt der Struktur, die später live auf GitHub Pages /
Cloudflare Pages liegt.

### Option B — Einzelne Server pro Page (legacy)

Jede Page hat ihren eigenen Mini-Server:

```bash
# Tierschutzvereine & Tierheime
cd tierschutzverein && node _server.cjs    # → http://localhost:8089/

# Hundetrainer & Sportvereine
cd hundetrainer && node _server.cjs        # → http://localhost:8090/
```

## Verzeichnisstruktur

```
Hundestuben/
├── README.md                           ← Du bist hier
├── CLAUDE.md                           ← Anleitung für Claude-Code-Nutzer
├── _preview.cjs                        ← Ein Server für alles (Port 4000)
├── _reorder-sections.cjs               ← Tooling: Sektionen umsortieren
├── EMPFEHLUNGSKONZEPT-Hunde-2-Pages.md ← Strategisches Konzept-Dokument
├── index.html                          ← Übersicht
├── tierschutzverein/
│   ├── index.html                      ← Landingpage Tierschutz
│   └── _server.cjs                     ← Einzel-Server (Port 8089)
└── hundetrainer/
    ├── index.html                      ← Landingpage Trainer/Vereine
    └── _server.cjs                     ← Einzel-Server (Port 8090)
```

## Was noch offen ist (Platzhalter im Code)

Beim Live-Deploy ersetzen:

- `49XXXXXXXXXX` → echte WhatsApp-Nummer
- `[CALENDLY-USERNAME]/...` → echte Calendly-Event-Types
- `[FORM-BACKEND-URL]` → Formular-Backend (z. B. Formspree, Web3Forms, oder eigener Endpoint)
- `[E-Mail einfügen]`, `[Telefon einfügen]` → Otto's echte Kontaktdaten
- `[D-XXXX-XXXX-XX]` → Vermittlerregister-Nummer
- `impressum.html`, `datenschutz.html`, `erstinformation.pdf` → echte Rechtsseiten anlegen
- Stock-Fotos (Unsplash) → eigene Bilder

## Online stellen — Optionen

| Anbieter | Privates Repo? | Kostenlos? | Bemerkung |
|---|---|---|---|
| GitHub Pages | nur in Pro (~4 USD/Mo) | bei öffentlichem Repo ja | einfachster Weg |
| Cloudflare Pages | ja | ja | verbindet sich mit privatem GitHub-Repo, top für privat |
| Vercel | ja | ja (Hobby-Plan) | ähnlich wie Cloudflare Pages |
| Netlify | ja | ja (Starter-Plan) | drag-and-drop möglich, auch Git-Anbindung |

Für **privat + kostenlos** ist **Cloudflare Pages** die sauberste Wahl: GitHub-Repo
privat lassen, Cloudflare-Pages-Projekt verbindet sich damit, jeder Push deployed
automatisch.

## Lizenz / Nutzung

Internes Projekt — Natürlich Abgesichert · Otto Boldt.
