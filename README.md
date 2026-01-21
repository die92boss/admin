# Guida: Creare un Account Admin e Rimuovere ESET su Windows

Questa guida ti spiega passo per passo come creare un account amministratore su un PC Windows usando il Prompt dei comandi dalla modalità di ripristino, e come disinstallare manualmente prodotti ESET.

## Indice dei Contenuti

1. [Prerequisiti](#1-prerequisiti)
2. [Creazione dell'Account Admin](#2-creazione-dellaccount-admin)
3. [Ripristinare Utilman](#3-ripristinare-utilman)
4. [Disinstallare Prodotti ESET](#4-disinstallare-prodotti-eset)
5. [Note sulla Sicurezza](#5-note-sulla-sicurezza)

---

## 1. Prerequisiti

- **Accesso fisico** al computer. Questa procedura non può essere eseguita da remoto.
- Una conoscenza di base di come navigare nel **Prompt dei comandi** (`cd`, `dir`, etc.).
- Un **backup dei dati importanti**. Sebbene la procedura sia relativamente sicura, è sempre buona norma avere un backup prima di apportare modifiche a livello di sistema.

---

## 2. Creazione dell'Account Admin

### 1. Riavviare il PC in Modalità di Ripristino

Tieni premuto **Maiusc/Shift** e clicca su **Riavvia** dal menu Start.

### 2. Aprire il Prompt dei Comandi

Dalla schermata di ripristino:

1. **Risoluzione dei problemi**
2. **Opzioni avanzate**
3. **Prompt dei comandi**

### 3. Sostituire Utilman con il Prompt dei comandi

Inserisci i seguenti comandi, uno alla volta, premendo Invio dopo ognuno:

```
C:
```

```
cd Windows\System32
```

```
ren Utilman.exe Utilman.exe.bak
```

```
copy cmd.exe Utilman.exe
```

> **Nota:** La lettera potrebbe variare in base alla partizione dove è installato Windows; di default è `C`.

### 4. Riavvia il PC

Chiudi il Prompt dei comandi cliccando la **X** in alto a destra e riavvia il computer.

### 5. Aprire il Prompt dei comandi dalla schermata di accesso

Alla schermata di login, clicca sull’**icona dell’accessibilità** (l’omino stilizzato in basso a destra). Si aprirà il Prompt dei comandi.

### 6. Creare l’account amministratore

Sostituisci `NomeUtente` e `Password` con i dati desiderati ed esegui questi due comandi, uno alla volta:

```
net user NomeUtente Password /add
```

```
net localgroup administrators NomeUtente /add
```

### 7. Accedere con il nuovo utente

- Alla schermata di accesso, seleziona **Altro utente**.
- Inserisci le credenziali dell’account appena creato.
- **IMPORTANTE**: metti `.\` prima del nome utente per forzare l’accesso locale: `.\NomeUtente`

### 8. Verifica dei privilegi

Dopo l’accesso, premi `Win + X` e clicca su **Terminale (Admin)** per verificare di avere i privilegi da amministratore.

---

## 3. Ripristinare Utilman

### 1. Riavviare in Modalità di Ripristino

Segui lo stesso procedimento di prima.

### 2. Aprire il Prompt dei Comandi

Inserisci i seguenti comandi, uno alla volta, premendo Invio dopo ognuno:

```
C:
```

```
cd Windows\System32
```

```
del Utilman.exe
```

```
ren Utilman.exe.bak Utilman.exe
```

### 3. Riavviare il PC

Alla schermata di accesso, l’icona dell’accessibilità ora aprirà di nuovo il menu corretto.

---

## 4. Disinstallare Prodotti ESET

Questa sezione descrive come utilizzare lo strumento ESET Uninstaller per rimuovere un prodotto ESET quando i metodi di disinstallazione standard falliscono. **Usare questo strumento come ultima risorsa.**

> **⚠️ Attenzione:**
>
> - Prima di procedere, assicurati di avere un **backup dei dati importanti**.
> - L'utilizzo di ESET Uninstaller potrebbe **resettare le impostazioni di rete di Windows**.
> - È necessario riavviare il PC in **Modalità Provvisoria**.

### 1. Scaricare ESET Uninstaller

Scarica lo strumento dal seguente link e salvalo sul Desktop o in una cartella facilmente accessibile:

[**Scarica ESET Uninstaller**](https://download.eset.com/com/eset/tools/installers/eset_apps_remover/latest/uninstaller.exe)

### 2. Riavviare il PC in Modalità Provvisoria

- Tenere premuto il tasto **Maiusc/Shift** e cliccare su **Riavvia** (dal menu Start o dalla schermata di accesso).
- Alla schermata di riavvio, selezionare:
  1. **Risoluzione dei problemi**
  2. **Opzioni avanzate**
  3. **Impostazioni di avvio** (se non visibile, cercare "Visualizza altre opzioni di ripristino")
- Cliccare su **Riavvia**.
- Al successivo riavvio, premere il tasto numerico corrispondente all'opzione desiderata:
  - **4** o **F4** per "Abilita modalità provvisoria".
  - **5** o **F5** per "Abilita modalità provvisoria con rete" (se ESET Uninstaller deve essere scaricato).

### 3. Eseguire ESET Uninstaller

- Una volta in Modalità Provvisoria, apri il **Prompt dei comandi come amministratore**:
  - Cerca "cmd" nel menu Start.
  - Clicca con il tasto destro su "Prompt dei comandi" e seleziona "Esegui come amministratore".
- Naviga alla directory dove hai salvato `uninstaller.exe`. Ad esempio, se l'hai salvato sul Desktop del tuo utente:
  ```
  cd C:\Users\NomeUtente\Desktop
  ```
  _(Sostituisci `NomeUtente` con il nome effettivo del tuo profilo utente)_
- Esegui lo strumento digitando:
  ```
  uninstaller.exe
  ```
- Leggi attentamente le avvertenze e digita `y` per confermare.
- Lo strumento elencherà i prodotti ESET installati. Digita il numero corrispondente al prodotto che vuoi rimuovere e premi Invio.
- Conferma nuovamente la disinstallazione digitando `y`.
- Al termine del processo, lo strumento ti chiederà di riavviare il computer. Premi un tasto qualsiasi per chiudere lo strumento.

### 4. Riavviare in Modalità Normale

- Riavvia il computer normalmente.
- Dopo il riavvio, elimina il file `uninstaller.exe` dal Desktop (o da dove l'avevi salvato).

Il prodotto ESET dovrebbe essere stato rimosso.

---

## 5. Note sulla Sicurezza

- **Maiusc/Shift ≠ Bloc Maiusc**: usa il tasto corretto!
- Questi metodi sono utili se hai accesso fisico al PC ma hai perso l’account principale o hai problemi con software specifici.
- Usali solo in contesti leciti e con autorizzazione, o sul tuo personale computer.

---

© Guida a scopo didattico
