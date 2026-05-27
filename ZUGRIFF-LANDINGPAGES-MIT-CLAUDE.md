# Zugriff auf die Landingpages — von Null bis Mitarbeiten

**Für:** Otto Boldt
**Von:** Kim Grönwoldt
**Ergebnis nach dieser Anleitung:** Du kannst die Hunde-Landingpages auf Deinem Rechner anschauen, mit Claude beliebige Änderungen besprechen und vornehmen, und Deine Änderungen so sichern, dass Kim sie sofort sieht — alles eigenständig, ohne sie zu fragen.

**Zeitaufwand:**
- Einmalige Einrichtung: ca. **45 Minuten** (davon ca. 10 Min Klicken, der Rest sind Downloads die im Hintergrund laufen)
- Pro Änderung danach: **1–5 Minuten**

**Was Du brauchst:**
- Einen PC mit Windows (oder Mac, ähnlich)
- Eine E-Mail-Adresse, auf die Du Zugriff hast
- Stabiles Internet (für Downloads ~300 MB insgesamt)
- Eine Tasse Kaffee ☕

---

## Übersicht — die 7 Phasen

| Phase | Was | Dauer |
|---|---|---|
| 1 | GitHub-Account anlegen | 3 Min |
| 2 | Username an Kim → sie lädt Dich ein → Einladung annehmen | 5 Min (warten) |
| 3 | Tools installieren (GitHub Desktop, Node.js) | 15 Min (meiste Zeit Download) |
| 4 | Das Repository auf Deinen PC holen | 2 Min |
| 5 | Pages lokal anschauen | 5 Min |
| 6 | Claude einrichten und erste Test-Frage | 10 Min |
| 7 | Erste Änderung machen + zu GitHub hochladen | 5 Min |

---

## Phase 1 — GitHub-Account anlegen (3 Min)

GitHub ist die Plattform, auf der die Landingpages liegen. Du brauchst einen eigenen Account, damit Kim Dich als Mitarbeiter einladen kann.

### So geht's:

1. **Browser öffnen** (Chrome, Edge, Firefox — egal)
2. **Adresse eintippen:** `https://github.com/signup`
3. **„Email"** eingeben — am besten Deine Firmen-E-Mail (z.B. `otto@natuerlich-abgesichert.de`)
4. **„Password"** wählen — mindestens 8 Zeichen, sicher
5. **„Username"** wählen — der bleibt für immer (z.B. `otto-boldt` oder `na-otto`)
6. **„Continue"** klicken
7. Eventuell ein **Captcha** lösen (Puzzle, „klicke auf alle Bilder mit Ampeln" o.ä.)
8. **E-Mail überprüfen** — GitHub schickt eine Bestätigungsmail mit einem **8-stelligen Code**
9. Diesen Code in GitHub eingeben → **„Continue"**
10. **Fragebogen überspringen** („Skip personalization" unten klicken)

### Was Du jetzt hast:

Du bist eingeloggt bei github.com. Oben rechts siehst Du Deinen Avatar (lila Quadrate-Muster oder so).

### ⚠️ Jetzt sehr wichtig:

**Notiere oder kopiere Deinen Benutzernamen** — den brauchst Du gleich für Kim.
Den findest Du immer oben rechts im Avatar-Menü → ganz oben.

---

## Phase 2 — Username an Kim → Einladung annehmen (5 Min warten)

1. **WhatsApp/E-Mail an Kim:**
   *„Mein GitHub-Username ist: [DEINUSERNAME]"*

2. **Warten.** Kim klickt einmal und lädt Dich als „Collaborator" (Mitarbeiter) ein.

3. **Du bekommst eine E-Mail von GitHub:**
   Betreff: *„rdmgroenwoldt-cloud invited you to collaborate on hundestuben"*

4. In der Mail steht ein grüner Knopf **„View invitation"** → klicken → Browser öffnet → **„Accept invitation"** klicken

5. Du landest auf der Repository-Seite: `https://github.com/rdmgroenwoldt-cloud/hundestuben`

### Was Du jetzt hast:

Zugriff auf das `hundestuben`-Repository (privat — nur Kim, Du und eingeladene Personen sehen es).

---

## Phase 3 — Tools installieren (~15 Min, davon nur 5 Min Klicken)

Du installierst zwei Programme. Beide sind kostenlos und seriös.

### 3.1 GitHub Desktop (das Hauptprogramm)

Damit lädst Du das Repository auf Deinen Rechner und sicherst später Änderungen.

1. **Browser:** `https://desktop.github.com/`
2. **Großen blauen Knopf „Download for Windows"** klicken
3. **Installer öffnen** (heißt `GitHubDesktopSetup.exe`, liegt in Downloads)
4. Installation läuft automatisch durch — keine Klicks nötig
5. GitHub Desktop **öffnet sich automatisch**
6. **„Sign in to GitHub.com"** klicken
7. Browser öffnet sich → Du bist schon eingeloggt → **„Authorize GitHub Desktop"** → grüner Knopf
8. Browser fragt: *„GitHub Desktop öffnen?"* → **„Erlauben"**
9. Zurück in GitHub Desktop: **„Configure Git"** → einfach **„Finish"** klicken (Vorausgefüllte Werte passen)

### 3.2 Node.js (für die lokale Vorschau)

Damit kannst Du die Pages auf Deinem eigenen Rechner anschauen, bevor Du was hochlädst.

1. **Browser:** `https://nodejs.org/de/` (deutsche Seite)
2. **Grüner Knopf „LTS"** klicken (steht „Recommended For Most Users" drunter)
3. Installer öffnen (heißt `node-vXX.X.X-x64.msi`)
4. Installation: **immer „Next"** klicken — Standard-Einstellungen passen alle
5. Am Ende: **„Install"** → eventuell UAC-Frage von Windows („Möchten Sie zulassen…") → **„Ja"**
6. **„Finish"** → fertig

### Was Du jetzt hast:

GitHub Desktop und Node.js installiert. Beide brauchst Du nicht selbst zu öffnen — laufen im Hintergrund.

---

## Phase 4 — Das Repository auf Deinen PC holen (2 Min)

1. **GitHub Desktop** ist offen (oder Windows-Suche → „GitHub Desktop" → Enter)
2. Reiter **„Your repositories"** sollte aktiv sein — Du siehst dort `hundestuben` ODER:
3. Falls nicht: **„Clone a repository from the Internet…"** klicken
4. Reiter **„GitHub.com"** wählen
5. In der Liste **`rdmgroenwoldt-cloud/hundestuben`** anklicken (markiert)
6. **„Local Path"**: lass den vorgeschlagenen Pfad **oder** wähle einen Ordner, in dem Du das speichern willst (z.B. `C:\Hundestuben` ist übersichtlich)
7. **„Clone"** klicken

GitHub Desktop lädt jetzt alle Dateien herunter (~5 MB, geht in Sekunden).

### Was Du jetzt hast:

Eine vollständige Kopie der Landingpages auf Deinem Rechner, z.B. unter `C:\Hundestuben\`.

Im Ordner siehst Du:
- `index.html` — Übersichts-Seite
- `tierschutzverein/` — Ordner mit Tierschutz-Landingpage
- `hundetrainer/` — Ordner mit Hundetrainer-Landingpage
- `README.md` — Erklärung was das Projekt ist
- `CLAUDE.md` — Regeln für Claude (wichtig!)
- `_preview.cjs` — Hilfsprogramm für die Vorschau
- ein paar weitere

---

## Phase 5 — Pages lokal anschauen (5 Min)

Bevor Du Änderungen machst — schau Dir die Pages erstmal an, damit Du weißt was da ist.

### So geht's:

1. **Eingabeaufforderung öffnen:**
   - Windows-Taste drücken → `cmd` tippen → Enter
   - Es öffnet sich ein schwarzes Fenster

2. **In den Hundestuben-Ordner wechseln** — gib ein (Pfad anpassen falls Du einen anderen gewählt hast):
   ```
   cd C:\Hundestuben
   ```
   Enter drücken.

3. **Vorschau-Server starten:**
   ```
   node _preview.cjs
   ```
   Enter drücken.

4. Es erscheint Text:
   ```
   Hundestuben — Vorschau
   PORT: 4000
   Übersicht:    http://localhost:4000/
   Tierschutz:   http://localhost:4000/tierschutzverein/
   Hundetrainer: http://localhost:4000/hundetrainer/
   ```

5. **Browser öffnen:** `http://localhost:4000/`

Du siehst jetzt die Übersicht — königliche Palette, Gold-Akzente. Klick die beiden Kacheln an → schau Dir beide Landingpages an.

### Beim Schließen:

Im Eingabeaufforderungs-Fenster **Strg + C** drücken → Server stoppt.
Das schwarze Fenster kannst Du schließen.

### Was Du jetzt hast:

Du weißt was die Pages sind und wie sie aussehen.

---

## Phase 6 — Claude einrichten (10 Min)

Es gibt zwei Wege, mit Claude an den Pages zu arbeiten. Wähle den einfacheren — wenn Du später mehr willst, kannst Du den anderen ergänzen.

### Variante A — Claude im Browser (claude.ai) — **EMPFEHLUNG für den Start**

**Für wen:** Anfänger, gelegentliche Änderungen, lieber chatten als Befehle.

1. **Browser:** `https://claude.ai/`
2. **Anmelden** mit Deiner E-Mail (oder Google-Konto, falls Du eins hast)
   - Kostenlos: 10–20 Nachrichten pro Tag
   - **Pro (Empfehlung):** ~20 USD/Monat, viel mehr Nachrichten + bessere Modelle. Lohnt sich wenn Du regelmäßig arbeitest.
3. **„Start new chat"** klicken
4. **Dateien hochladen:** im Chat-Fenster gibt es ein Büroklammer-Icon 📎 → klick → wähle die Datei, die Du ändern willst (z.B. `C:\Hundestuben\tierschutzverein\index.html`)
5. **Zusätzlich** lade auch `CLAUDE.md` und `README.md` mit hoch — die enthalten die Regeln, damit Claude keine Fehler macht
6. **Erste Nachricht** an Claude:

   ```
   Hallo, ich arbeite an Landingpages für eine Tierversicherungs-Agentur.
   Lies bitte ZUERST die CLAUDE.md und die README.md — dort stehen
   die Regeln. Bestätige mir dann kurz dass Du verstanden hast,
   ohne jetzt schon was zu ändern.
   ```

7. Claude antwortet → wenn er „verstanden" sagt, kannst Du Aufgaben geben

### Variante B — Claude Code (im Terminal) — für Fortgeschrittene

**Für wen:** technischer Hintergrund, größere Änderungen, mag Befehlszeile.

1. Anleitung: `https://docs.anthropic.com/de/docs/claude-code/quickstart`
2. Nach Installation: Eingabeaufforderung → `cd C:\Hundestuben` → `claude`
3. Claude liest automatisch alle Dateien im Ordner, weiß alle Regeln

### Empfehlung für den Start: **Variante A**

Du musst nichts installieren, alles läuft im Browser, intuitiver.

---

## Phase 7 — Erste Änderung machen und hochladen (5 Min)

Jetzt das Wichtigste: einmal den ganzen Ablauf durchspielen, damit Du weißt wie es funktioniert.

### Beispiel-Übung: Ändere die Überschrift auf der Tierschutz-Page

#### 7.1 Frage an Claude (im Browser-Chat):

```
Bitte ändere in der Datei tierschutzverein/index.html die Hero-Überschrift
zu: "Test-Überschrift von Otto"
```

Claude antwortet mit einer geänderten Datei.

#### 7.2 Datei herunterladen und ersetzen:

1. Claude zeigt einen Download-Knopf für die geänderte Datei → klicken
2. Die heruntergeladene `index.html` per Drag & Drop in den Ordner `C:\Hundestuben\tierschutzverein\` ziehen
3. Windows fragt: *„Datei ersetzen?"* → **„Ja, ersetzen"**

#### 7.3 In GitHub Desktop nachschauen:

1. **GitHub Desktop öffnen**
2. Du siehst auf der linken Seite jetzt:
   - **„Changes"** mit der Zahl `1` (oder mehr)
   - Die Datei `tierschutzverein/index.html` ist aufgelistet
3. **Rechts** siehst Du genau was sich geändert hat (rot = entfernt, grün = neu)

#### 7.4 Änderung sichern (Commit):

1. **Unten links** in GitHub Desktop ist ein Feld **„Summary (required)"**
2. **Kurze Beschreibung** eintippen, z.B.: *„Test: Hero-Überschrift Tierschutz geändert"*
3. **Optional**: längere Beschreibung in „Description" — kannst Du leer lassen
4. **Knopf „Commit to main"** klicken

#### 7.5 Hochladen zu GitHub (Push):

1. **Oben** in GitHub Desktop ist jetzt ein Knopf **„Push origin"** (mit kleinem Pfeil nach oben)
2. **Klicken**

In 5 Sekunden ist Deine Änderung auf GitHub. Kim sieht sie sofort.

### Was Du jetzt geschafft hast:

🎉 Du hast eine Änderung gemacht, lokal gesichert und zu GitHub hochgeladen.
**Genauso machst Du jetzt jede zukünftige Änderung.**

### Übung rückgängig machen:

Wenn die Test-Änderung wieder weg soll: Sag Kim Bescheid, sie macht das in 5 Sekunden rückgängig. Oder Du fragst Claude: „Bitte stell die Hero-Überschrift wieder her auf den ursprünglichen Text."

---

## Wichtige Regeln (von Kim — bitte respektieren)

Diese Regeln stehen auch in der `CLAUDE.md`. Claude liest sie automatisch wenn Du diese Datei mit ihm teilst.

- **„Hundestube"** statt „Salon" — überall, ohne Ausnahme
- Auf der **Tierschutz-Page**: „Spende" statt „Provision"
- Auf der **Hundetrainer-Page**: „Provision" nur im Kontext Einzeltrainer:in; „Spende" für Hundesportvereine
- **Keine Berufsbezeichnungen** wie „TFA" oder „Ernährungsberater" — stattdessen: *„unser Team kommt aus den unterschiedlichsten Berufen des Klein- und Großtiersektors (Klinik, Beratung, Vereins- und Tierschutzarbeit)"*
- **Tierpass-App gibt es nicht** für Hunde/Katzen — nicht erwähnen
- **Keine englischen Begriffe** wo deutsche existieren:
  - „Logo-Einbindung" statt „Co-Branding"
  - „Einrichtung" statt „Setup"
  - „Willkommens-Mappe" statt „Welcome-Pack"
  - Eigennamen wie WhatsApp, Zoom, Calendly, PDF, MRT, CT, IGP bleiben Englisch
- **Sektion-Marker** (`<!-- ====== TAG ====== -->`) bitte nicht entfernen
- **Bei Sektionen verschieben:** das Hilfs-Skript `_reorder-sections.cjs` nutzen — das hält Hintergrund-Rhythmus (cream/weiß) automatisch sauber
- **FAQ-Sektionen** sollen geradzahlige Anzahl haben (3+3 = 6, oder 4+4 = 8) — damit die zwei-Spalten-Darstellung symmetrisch bleibt
- **6 Themenblöcke** in „Inhalt in der Hundestube" bleiben

---

## Wenn Du und Kim gleichzeitig arbeitet

**Solange Ihr in unterschiedlichen Bereichen** arbeitet (Du z.B. Hundetrainer, Kim Tierschutz): läuft alles reibungslos parallel.

**Wenn Ihr beide dieselbe Datei** ändert: GitHub Desktop meldet beim Push einen „Konflikt". Dann:
1. Klick in GitHub Desktop oben **„Fetch origin"** → holt Kims neue Version
2. **Eine Pop-up** sagt: *„This branch has changes that conflict…"*
3. Frag Claude: *„GitHub meldet einen Konflikt in der Datei XY. Bitte hilf mir den aufzulösen."*
4. Claude erklärt was zu tun ist

**Gute Gewohnheit vor dem Arbeiten:** in GitHub Desktop oben **„Fetch origin"** klicken → holt Kims neueste Änderungen. Dann beginnst Du auf dem neuesten Stand und vermeidest Konflikte.

---

## Häufige Fragen

### Was ist wenn ich mich beim Klicken vertippe / etwas Falsches commite?

Alles ist rückgängig machbar. GitHub speichert jede Version, nichts geht verloren.
Frag Claude: *„Ich habe versehentlich XY gemacht — kannst Du das rückgängig machen?"*
Oder frag Kim — sie macht es in 2 Min.

### Was wenn der Vorschau-Server (`node _preview.cjs`) nicht startet?

Häufigste Ursache: Node.js wurde nicht installiert oder neuer Computer-Neustart fehlt nach Installation.
Lösung: Computer einmal neu starten, dann nochmal versuchen.
Wenn's immer noch hakt: Kim fragen.

### Brauche ich GitHub Pro / muss ich was bezahlen?

**Nein.** Kim hat Pro — das gilt für ihr Repo. Du arbeitest als kostenloser Collaborator mit.

### Kann ich auch was kaputt machen?

Kurz: praktisch nein. Selbst wenn Du was Falsches pushst, ist die alte Version noch da — Kim kann jederzeit zurückrollen.
Tabu: NIE die Datei `.gitignore` oder `_preview.cjs` löschen.
Tabu: NIE im Repository „Delete repository" klicken (Settings → ganz unten — Du kommst da rein, aber bitte nicht klicken).

### Was wenn Claude einen Fehler macht?

Claude liest beim ersten Mal `CLAUDE.md` — dort stehen die Regeln. Wenn er was macht, was Du nicht magst:
1. Vor dem Push → einfach Datei nicht ersetzen, andere Version mit Claude besprechen
2. Nach dem Push → Kim sehen lassen, sie rollt zurück oder bessert nach

### Wo finde ich die Beschreibungen was die Pages eigentlich aussagen sollen?

Im Repo liegt die Datei **`EMPFEHLUNGSKONZEPT-Hunde-2-Pages.md`** — strategisches Konzept, Zielgruppen, Wording-Frames, das Spenden-Modell.
**Vor inhaltlichen Änderungen** unbedingt lesen.

---

## Bei Problemen — Eskalation

| Wie schwer | Was tun |
|---|---|
| Eine Frage zum Vorgehen | Im Repo `CLAUDE.md` und `README.md` schauen |
| Kleinere Unsicherheit | Claude direkt fragen |
| GitHub Desktop / Node.js streikt | Diese Anleitung Phase 3 wiederholen |
| Inhaltliche Frage zu den Pages | Konzept-MD lesen |
| Größerer Knoten / unklar | WhatsApp/Anruf an Kim |

---

## Zusammenfassung — was Du jetzt kannst

✅ Du hast einen GitHub-Account und Zugriff auf das Repo
✅ GitHub Desktop und Node.js sind installiert
✅ Du hast das Repo lokal auf Deinem Rechner
✅ Du kannst die Pages jederzeit lokal anschauen
✅ Du arbeitest mit Claude per Browser oder Terminal
✅ Du kannst Änderungen sicher zu GitHub bringen

**Pro Änderung in Zukunft:**
1. GitHub Desktop → „Fetch origin" (Kims neueste Änderungen holen)
2. Mit Claude reden → Änderung machen lassen
3. Geänderte Datei in den Ordner kopieren
4. GitHub Desktop → „Commit" → „Push"
5. Fertig

**Insgesamt: 1–5 Min pro Änderung.**

---

Willkommen im Team. 🐾

Bei Fragen: Kim direkt anrufen oder WhatsApp.
