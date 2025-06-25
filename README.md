# Guida: Creare un Account Admin e Rimuovere ESET su Windows

Questa guida ti spiega passo per passo come creare un account amministratore su un PC Windows usando il Prompt dei comandi dalla modalità di ripristino, e come disinstallare manualmente prodotti ESET.

---

## 🛠️ Sezione 1 – Creazione dell'Account Admin

### 1. Riavviare il PC in Modalità di Ripristino
Puoi farlo così:
- Tieni premuto **Maiusc/Shift** e clicca su **Riavvia** dal menu Start.

### 2. Aprire il Prompt dei Comandi
- Seleziona **Risoluzione dei problemi**
- Seleziona **Opzioni avanzate**
- Seleziona **Prompt dei comandi**

### 3. Sostituire Utilman con il Prompt dei comandi
Inserisci i seguenti comandi:

```
C:
cd Windows\System32
ren Utilman.exe Utilman.exe.bak
copy cmd.exe Utilman.exe
```

*(La lettera potrebbe variare in base alla partizione dove è installato Windows; di default è C)*

### 4. Riavvia il PC
Chiudi il Prompt dei comandi cliccando la **X** in alto a destra e riavvia il computer.

### 5. Aprire il Prompt dei comandi dalla schermata di accesso
Alla schermata di login, clicca sull’**icona dell’accessibilità** (l’omino stilizzato in basso a destra). Si aprirà il Prompt dei comandi.

### 6. Creare l’account amministratore
Sostituisci `NomeUtente` e `Password` con i dati desiderati:

```
net user NomeUtente Password /add
net localgroup administrators NomeUtente /add
```

### 7. Accedere con il nuovo utente
- Alla schermata di accesso, seleziona **Altro utente**
- Inserisci le credenziali dell’account appena creato
- **IMPORTANTE**: metti `.\` prima del nome utente per forzare l’accesso locale:
  ```.\NomeUtente```

### 8. Verifica dei privilegi
Dopo l’accesso, premi `Win + X` e clicca su **Terminale (Admin)** per verificare di avere i privilegi da amministratore.

---

## ♻️ Sezione 2 – Ripristinare Utilman

### 1. Riavviare nuovamente in Modalità di Ripristino
Segui lo stesso procedimento di prima.

### 2. Aprire il Prompt dei Comandi e digitare:

```
C:
cd Windows\System32
del Utilman.exe
ren Utilman.exe.bak Utilman.exe
```

### 3. Riavviare il PC
Alla schermata di accesso, l’icona dell’accessibilità ora aprirà di nuovo il menu corretto.

---

## 🗑️ Parte 3 – Disinstallare Prodotti ESET Manualmente [KB2289]

Questa sezione descrive come utilizzare lo strumento ESET Uninstaller per rimuovere un prodotto ESET quando i metodi di disinstallazione standard falliscono. **Usare questo strumento come ultima risorsa.**

⚠️ **Attenzione:**
- Prima di procedere, assicurati di avere un **backup dei dati importanti**.
- L'utilizzo di ESET Uninstaller potrebbe **resettare le impostazioni di rete di Windows**.
- È necessario riavviare il PC in **Modalità Provvisoria**.

### 1. Scaricare ESET Uninstaller
Scarica lo strumento dal seguente link e salvalo sul Desktop o in una cartella facilmente accessibile:
[ESET Uninstaller Download](https://download.eset.com/com/eset/tools/installers/eset_apps_remover/latest/uninstaller.exe)

### 2. Riavviare il PC in Modalità Provvisoria
Per eseguire ESET Uninstaller, Windows deve essere avviato in Modalità Provvisoria. Ci sono due metodi principali:

**A) Tramite Opzioni di Avvio Avanzate (Percorso simile alla Modalità di Ripristino):**
Questo metodo utilizza le stesse schermate di avvio avanzato viste nella Parte 1 per accedere alla Modalità di Ripristino.
1.  Tieni premuto il tasto **Maiusc/Shift** e, contemporaneamente, clicca su **Riavvia** dal menu Start (o dalla schermata di login).
2.  Il PC si riavvierà mostrando una schermata blu. Seleziona **Risoluzione dei problemi**.
3.  Poi seleziona **Opzioni avanzate**.
4.  Ora, invece di "Prompt dei comandi" (come nella Parte 1), seleziona **Impostazioni di avvio**.
    *(Se "Impostazioni di avvio" non è subito visibile, potresti dover cliccare su "Visualizza altre opzioni di ripristino").*
5.  Clicca sul pulsante **Riavvia**.
6.  Dopo il riavvio, vedrai un elenco di opzioni. Premi il tasto numerico corrispondente a **Abilita modalità provvisoria** (solitamente `4` o `F4`). Se hai bisogno di accesso a Internet (ad esempio, per scaricare di nuovo lo strumento), scegli **Abilita modalità provvisoria con rete** (solitamente `5` o `F5`).

**B) Tramite `msconfig` (Configurazione di Sistema):**
Questo metodo modifica temporaneamente la configurazione di avvio di Windows.
1.  Premi i tasti `Win + R` per aprire la finestra "Esegui".
2.  Digita `msconfig` e premi Invio (o clicca OK).
3.  Nella finestra "Configurazione di sistema", vai alla scheda **Opzioni di avvio**.
4.  Nella sezione "Opzioni di avvio", spunta la casella **Modalità provvisoria**.
5.  Assicurati che sia selezionata l'opzione "Minima" sotto la casella. Se hai bisogno di accesso a Internet, seleziona "Rete".
6.  Clicca **OK** e poi **Riavvia** quando richiesto dal sistema.
    **Importante:** Dopo aver completato le operazioni in Modalità Provvisoria e prima di riavviare il PC normalmente, dovrai rieseguire `msconfig` e **deselezionare** la casella "Modalità provvisoria" per evitare che il PC continui ad avviarsi in questa modalità.

*Scegli il metodo che ti risulta più comodo. Il metodo A effettua un singolo avvio in Modalità Provvisoria. Il metodo B modifica la configurazione di avvio finché non viene annullata manualmente.*

### 3. Eseguire ESET Uninstaller
- Una volta in Modalità Provvisoria, apri il **Prompt dei comandi come amministratore**:
    - Cerca "cmd" nel menu Start.
    - Clicca con il tasto destro su "Prompt dei comandi" e seleziona "Esegui come amministratore".
- Naviga alla directory dove hai salvato `esetuninstaller.exe`. Ad esempio, se l'hai salvato sul Desktop del tuo utente:
  ```
  cd C:\Users\NomeUtente\Desktop
  ```
  *(Sostituisci `NomeUtente` con il nome effettivo del tuo profilo utente)*
- Esegui lo strumento digitando:
  ```
  esetuninstaller.exe
  ```
- Leggi attentamente le avvertenze e digita `y` per confermare.
- Lo strumento elencherà i prodotti ESET installati. Digita il numero corrispondente al prodotto che vuoi rimuovere e premi Invio.
- Conferma nuovamente la disinstallazione digitando `y`.
- Al termine del processo, lo strumento ti chiederà di riavviare il computer. Premi un tasto qualsiasi per chiudere lo strumento.

### 4. Riavviare in Modalità Normale
- Prima di riavviare, se hai usato `msconfig` per entrare in Modalità Provvisoria (Metodo B), rieseguilo e deseleziona "Modalità provvisoria" nella scheda "Opzioni di avvio". Se hai usato il Metodo A, non devi fare nulla di specifico, il PC si avvierà normalmente.
- Riavvia il computer.
- Dopo il riavvio, elimina il file `esetuninstaller.exe` dal Desktop (o da dove l'avevi salvato).

Il prodotto ESET dovrebbe essere stato rimosso.

---

## ℹ️ Note finali
- **Maiusc/Shift ≠ Bloc Maiusc**: usa il tasto corretto!
- Questi metodi sono utili se hai accesso fisico al PC ma hai perso l’account principale o hai problemi con software specifici.
- Usali solo in contesti leciti e con autorizzazione, o sul tuo personale computer.

---

© Guida a scopo didattico
