# Zugriff auf die Landingpages — um mit Claude dran zu arbeiten

**Für:** Otto Boldt
**Von:** Kim Grönwoldt
**Was Du am Ende kannst:** Die Hunde-Landingpages auf Deinem Rechner anschauen, mit Claude Änderungen besprechen und vornehmen, und Deine Änderungen so sichern, dass Kim sie sofort sieht.

---

## Was Du brauchst (alles kostenlos)

| Was | Wofür | Kosten | Aufwand |
|---|---|---|---|
| 1. **GitHub-Account** | um an den Pages mitzuarbeiten | kostenlos | 2 Min |
| 2. **GitHub Desktop** | um die Pages auf Deinen Rechner zu holen | kostenlos | 5 Min Installation |
| 3. **Claude** | um Änderungen mit Claude zu besprechen | je nach Variante | 10 Min |

**Gesamtzeit für Einrichtung: ~20 Minuten — einmalig.** Danach ist alles fertig.

---

## Schritt 1 — GitHub-Account anlegen (2 Min)

GitHub ist die Plattform, auf der die Landingpages liegen.

1. Im Browser öffnen: **https://github.com/signup**
2. **E-Mail** eingeben (am besten Deine Firmen-Mail, z.B. `otto@natuerlich-abgesichert.de`)
3. **Passwort** wählen (sicher, mind. 8 Zeichen, gemerkt oder im Passwort-Manager gespeichert)
4. **Benutzername** wählen — z.B. `otto-boldt` oder `natuerlich-abgesichert-otto`
5. **E-Mail bestätigen** (GitHub schickt einen Code an Deine Mail)
6. Fertig — Du bist angemeldet

> ⚠️ **Wichtig**: Den **Benutzernamen** notieren oder kopieren — den brauchst Du gleich für Kim.

---

## Schritt 2 — Kim schicken: „Mein GitHub-Username ist …"

Schick Kim per WhatsApp/E-Mail Deinen GitHub-Benutzernamen. Sie lädt Dich dann als **Mitarbeiter (Collaborator)** in das Hundestuben-Repository ein.

Du bekommst nach kurzer Zeit eine **Einladungs-E-Mail von GitHub**.
Klick darin auf **„Accept Invitation"** → fertig.

Ab jetzt siehst Du das Hundestuben-Repository unter
**https://github.com/rdmgroenwoldt-cloud/hundestuben**

---

## Schritt 3 — GitHub Desktop installieren (5 Min)

GitHub Desktop ist ein kleines Programm, das die Pages auf Deinen Rechner herunterlädt und Änderungen synchronisiert. **Du musst nichts auf Englisch tippen oder Befehle lernen** — alles über Knöpfe.

1. Browser: **https://desktop.github.com/**
2. **Download for Windows** klicken → Installer öffnen → installieren
3. GitHub Desktop startet automatisch
4. **„Sign in to GitHub.com"** klicken → Browser öffnet sich → einloggen mit Deinem GitHub-Account
5. **Zurück zu GitHub Desktop** → es zeigt jetzt Dein Konto

---

## Schritt 4 — Das Hundestuben-Repository auf Deinen Rechner holen

1. In GitHub Desktop: **„Clone a repository from the Internet…"**
2. Reiter **„GitHub.com"** wählen
3. In der Liste **`rdmgroenwoldt-cloud/hundestuben`** anklicken
4. **„Local Path"**: lass den vorgeschlagenen Pfad oder wähle einen Ordner, in dem Du das speichern willst (z.B. `C:\Hundestuben`)
5. **„Clone"** klicken

GitHub Desktop lädt jetzt alle Dateien herunter (~2 MB, geht in Sekunden).

**Fertig.** Du hast jetzt eine vollständige Kopie der Landingpages auf Deinem Rechner.

---

## Schritt 5 — Pages lokal anschauen (optional, aber empfehlenswert)

Bevor Du anfängst, etwas zu ändern: schau Dir die Pages erstmal an.

1. **Node.js installieren** falls noch nicht da: https://nodejs.org/de → grüner „LTS"-Button → Standard-Installation
2. **Eingabeaufforderung** (Windows-Taste, „cmd" tippen, Enter) öffnen
3. Folgende Befehle eingeben (Pfad anpassen, falls Du einen anderen Ordner gewählt hast):

```cmd
cd C:\Hundestuben
node _preview.cjs
```

4. Im Browser öffnen: **http://localhost:4000/**

Du siehst jetzt alle drei Pages live:
- `/` = Übersicht
- `/tierschutzverein/` = Tierschutzvereine & Tierheime
- `/hundetrainer/` = Hundetrainer & Sportvereine

Schließen mit **Strg+C** im Eingabeaufforderungs-Fenster.

---

## Schritt 6 — Claude einrichten

Es gibt zwei Wege, mit Claude zu arbeiten. Wähle den, der zu Dir passt:

### Variante A — Claude im Browser (claude.ai) — **einfachster Weg**

Für: Anfänger, gelegentliche Änderungen, lieber chatten als Befehle.

1. Im Browser: **https://claude.ai/** → anmelden (kostenlos für Basis, ~$20/Monat für Pro mit Computer Use)
2. Neuen Chat öffnen
3. Ordner `Hundestuben/` per Drag&Drop ins Chat-Fenster ziehen ODER die einzelne Datei, die Du ändern willst (z.B. `tierschutzverein/index.html`)
4. Mit Claude reden: *„Lies bitte zuerst die `CLAUDE.md` — dort stehen die Regeln. Dann ändere bitte in der Tierschutz-Page die Überschrift zu …"*
5. Claude antwortet mit der geänderten Datei → herunterladen → in den Ordner ersetzen

### Variante B — Claude Code (im Terminal) — **mächtiger, etwas Lernkurve**

Für: technischer Hintergrund, größere Änderungen, möchte direkt im Code arbeiten.

1. Installations-Anleitung: **https://docs.anthropic.com/en/docs/claude-code**
2. Nach Installation: Eingabeaufforderung öffnen → `cd C:\Hundestuben` → `claude`
3. Claude liest automatisch `CLAUDE.md` und weiß alle Regeln
4. Mit Claude reden — er ändert Dateien direkt

---

## Schritt 7 — Änderungen sichern (sehr wichtig!)

Wenn Claude eine Änderung gemacht hat, ist die zunächst nur auf Deinem Rechner. Damit Kim die Änderung auch sieht, musst Du sie zu GitHub „hochladen":

1. **GitHub Desktop** öffnen (Repository „hundestuben" sollte aktiv sein)
2. Im Bereich **„Changes"** siehst Du alle Dateien, die sich verändert haben
3. Unten links: **„Summary"** ausfüllen — z.B. *„Tierschutz: neue FAQ ergänzt"*
4. **„Commit to main"** klicken (sichert die Änderung lokal)
5. Oben: **„Push origin"** klicken (lädt die Änderung zu GitHub hoch)

**Fertig.** Kim sieht in wenigen Sekunden, was Du geändert hast.

---

## Wichtige Regeln (von Kim)

Diese Regeln stehen auch in der `CLAUDE.md` im Repository. Claude liest die automatisch.

- **„Hundestube"** statt „Salon" — überall
- Auf der **Tierschutz-Page**: „Spende" statt „Provision"
- Keine Berufsbezeichnungen wie „TFA" oder „Ernährungsberater" — stattdessen: *„unser Team kommt aus den unterschiedlichsten Berufen des Klein- und Großtiersektors"*
- **Tierpass-App gibt es nicht** für Hunde/Katzen — nicht erwähnen
- **Keine englischen Begriffe** wo es deutsche gibt: „Logo-Einbindung" statt „Co-Branding", „Einrichtung" statt „Setup"
- Bei Sektionen verschieben: das Hilfs-Skript `_reorder-sections.cjs` nutzen — das hält den Hintergrund-Rhythmus (cream/weiß) automatisch sauber

---

## Was tun wenn Du und Kim gleichzeitig arbeitet?

Solange Ihr in **unterschiedlichen Bereichen** arbeitet (Du z.B. Hundetrainer, Kim Tierschutz) → läuft alles reibungslos parallel.

Wenn Ihr beide dieselbe Datei ändert → GitHub Desktop meldet beim Push einen Konflikt. Frag in dem Fall Claude:
*„GitHub meldet einen Konflikt in der Datei XY. Bitte hilf mir den aufzulösen."*

Vor dem Arbeiten ist es **gute Gewohnheit**, oben in GitHub Desktop auf **„Fetch origin"** zu klicken — das holt die neuesten Änderungen von Kim, bevor Du loslegst.

---

## Bei Fragen oder Problemen

1. **Im Repository** liegt die Datei `CLAUDE.md` — das ist Dein Spickzettel für Claude
2. **Im Repository** liegt die Datei `README.md` — Übersicht über die Pages
3. **Im Repository** liegt das **`EMPFEHLUNGSKONZEPT-Hunde-2-Pages.md`** — strategisches Hintergrund-Dokument
4. **Bei Unsicherheit** Kim fragen, bevor Du commitest — Du kannst Änderungen auch erstmal lokal lassen und sie zeigen, bevor Du pushst

---

## Zusammenfassung

| Schritt | Was | Dauer |
|---|---|---|
| 1 | GitHub-Account anlegen | 2 Min |
| 2 | Username an Kim → Einladung annehmen | 5 Min (warten) |
| 3 | GitHub Desktop installieren | 5 Min |
| 4 | Repository clonen | 2 Min |
| 5 | Pages lokal anschauen | 5 Min |
| 6 | Claude einrichten | 10 Min |
| 7 | Erste Änderung machen + pushen | 5 Min Übung |

**Gesamt einmalig ca. 30 Minuten.** Danach: jede Änderung in 1–5 Minuten erledigt.

Willkommen im Team. 🐾
