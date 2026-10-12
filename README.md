# ItaliaMeravigliosa

Front-end della Web App realizzata con React + Vite, dedicata a più bei monumenti d'Italia corredata dalle relative recensioni.

# Caratteristiche dell'app 

- **Home page**: progettata con un carosello dinamico basato su card interattive dedicate alla presentazione e all'esplorazione dei monumenti con anteprima della valutazione media delle recensioni.

- **Pagina di dettaglio**: pagina informativa dedicata al singolo monumento che consente di consultare le recensioni degli altri visitatori, visualizzare la valutazione media tramite un sistema a stelle e inserire una propria recensione attraverso l'apposito form.

- **Gestione delle recensioni**: il form permette di inviare una recensione con nome, voto e messaggio. Sono gestiti gli stati di invio, conferma del successo ed errore in caso di problemi durante la richiesta API. Il messaggio di conferma scompare automaticamente dopo 5 secondi e il pulsante viene disabilitato durante l'invio per evitare richieste duplicate.

- **Gestione dello stato globale**: tramite la `Context API di React`, viene centralizzata la gestione degli stati di caricamento e degli errori durante il recupero delle risorse dal backend. Un indicatore di caricamento e gli eventuali messaggi di errore vengono visualizzati nel layout condiviso. Il contesto gestisce inoltre il breadcrumb dinamico aggiornando il titolo del monumento nell'header durante la navigazione alla pagina di dettaglio e ripristinando lo stato iniziale al ritorno alla home page.

- **Design responsive**: l'intera applicazione è progettata per adattarsi a diverse dimensioni dello schermo garantendo una navigazione e una fruizione dei contenuti ottimali su desktop, tablet e dispositivi mobili. Layout, componenti e contenuti si adattano dinamicamente alle dimensioni del viewport.


# Struttura del Front-end
```text
webapp-react/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── background_image/
│   │       └── sky_line_hero.jpg
│   ├── components/
│   │   ├── Loader.css
│   │   ├── Loader.jsx
│   │   ├── Place.jsx
│   │   ├── StarBorder.jsx
│   │   ├── StarFull.jsx
│   │   ├── Vote.css
│   │   └── Vote.jsx
│   ├── context/
│   │   └── GlobalContext.jsx
│   ├── layout/
│   │   ├── Layout.css
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── MonumentDetail/
│   │   │   ├── MonumentCard.css
│   │   │   ├── MonumentCard.jsx
│   │   │   ├── MonumentDetail.css
│   │   │   ├── MonumentDetail.jsx
│   │   │   ├── ReviewCard.css
│   │   │   ├── ReviewCard.jsx
│   │   │   ├── ReviewForm.css
│   │   │   └── ReviewForm.jsx
│   │   └── MonumentIndex/
│   │       ├── MonumentCard.css
│   │       ├── MonumentCard.jsx
│   │       ├── MonumentIndex.css
│   │       └── MonumentIndex.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.sample
├── .gitignore
├── .oxlintrc.json
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js`
```

## Organizzazione 

Il front-end è organizzato in componenti riutilizzabili e moduli funzionali con l'obiettivo di mantenere il codice ordinato, modulare e facilmente manutenibile.

- **components/**: contiene i componenti riutilizzabili dell'interfaccia come il loader, il sistema di valutazione a stelle e gli elementi dedicati ai voti.

- **context/**: gestisce lo stato globale dell'applicazione tramite React `Context` centralizzando gli stati di caricamento, gli errori e le informazioni necessarie al breadcrumb.

- **layout/**: contiene il layout condiviso delle pagine comprensivo di header, navigazione, area dei contenuti e footer.

- **pages/**: raccoglie le pagine principali dell'applicazione suddivise in `MonumentIndex`, dedicata all'esplorazione dei monumenti, e `MonumentDetail`, dedicata ai dettagli e alle recensioni.

- **assets/**: contiene le risorse statiche utilizzate nell'interfaccia come le immagini di sfondo.

- **App.jsx e main.jsx**: gestiscono rispettivamente la struttura principale dell'applicazione e il punto di ingresso React.

- **File di configurazione**: includono le configurazioni di Vite, le dipendenze del progetto, le variabili d'ambiente di esempio e le impostazioni Git.









