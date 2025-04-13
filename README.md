# Guida: Creare un Account Admin su Windows

Questa guida ti spiega passo per passo come creare un account amministratore su un PC Windows usando il Prompt dei comandi dalla modalità di ripristino.

---

## 🛠️ Parte 1 – Creazione dell'Account Admin

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
  ```
.\NomeUtente
```

### 8. Verifica dei privilegi
Dopo l’accesso, premi `Win + X` e clicca su **Terminale (Admin)** per verificare di avere i privilegi da amministratore.

---

## ♻️ Parte 2 – Ripristinare Utilman

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

## ℹ️ Note finali
- **Maiusc/Shift ≠ Bloc Maiusc**: usa il tasto corretto!
- Questo metodo è utile se hai accesso fisico al PC ma hai perso l’account principale
- Usalo solo in contesti leciti e con autorizzazione

---

© Guida a scopo didattico
