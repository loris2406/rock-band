# 🎸 Thunder Rocks - Sito Web Rock Band

## 📋 Descrizione
Sito web professionale per la rock band **Thunder Rocks**, con supporto multilingua (Italiano/Inglese).

## 🌟 Caratteristiche

### Tecnologie Utilizzate
- **HTML5** - Markup semantico moderno
- **CSS3** - Stili avanzati con variabili CSS personalizzabili
- **JavaScript ES6+** - Sistema di traduzione dinamico

### Funzionalità Principali
✅ **Multilingua**: Cambio istantaneo tra Italiano e Inglese  
✅ **5 Pagine Navigabili**: Home, Band, Music, Tour, Contact  
✅ **Design Responsivo**: Ottimizzato per desktop, tablet e mobile  
✅ **CSS Personalizzabile**: Variabili CSS per modificare facilmente colori e stili  
✅ **Form di Contatto**: Con gestione dell'invio (simulato)  
✅ **Animazioni**: Transizioni fluide e effetti visivi moderni  
✅ **Player Musicale**: Musica di sfondo rock con controlli Play/Pause/Volume  

## 📁 Struttura del Progetto

```
rock-band-site/
│
├── index.html          # Pagina principale
├── band.html           # Pagina membri della band
├── music.html          # Pagina discografia
├── tour.html           # Pagina date tour
├── contact.html        # Pagina contatti
│
├── css/
│   └── style.css       # Foglio di stile principale
│
├── js/
│   ├── translations.js # Sistema di traduzione
│   └── music-player.js # Player musicale di sfondo
│
├── audio/              # File audio (con istruzioni README)
│   └── README.md
│
└── images/            # Cartella per le immagini (vuota)
```

## 🎨 Personalizzazione CSS

Il sito utilizza **variabili CSS** per una facile personalizzazione. Modifica i valori in `:root` nel file `css/style.css`:

```css
:root {
    /* Colori principali */
    --primary-color: #ff0000;      /* Rosso principale */
    --secondary-color: #1a1a1a;    /* Grigio scuro */
    --accent-color: #ffd700;       /* Oro/Giallo */
    --text-color: #ffffff;         /* Bianco */
    --bg-color: #0a0a0a;           /* Nero di sfondo */
    
    /* Spaziatura */
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    
    /* Velocità transizioni */
    --transition-speed: 0.3s;
}
```

### Esempi di Personalizzazione

**Tema Blu:**
```css
--primary-color: #0066ff;
--accent-color: #00ccff;
```

**Tema Verde:**
```css
--primary-color: #00ff00;
--accent-color: #ffff00;
```

**Tema Viola:**
```css
--primary-color: #8800ff;
--accent-color: #ff00ff;
```

## 🌍 Sistema Multilingua

Il sito utilizza un sistema di traduzione JavaScript che:
- Salva la preferenza lingua nel `localStorage`
- Aggiorna automaticamente tutti i contenuti tradotti
- Non ricarica la pagina durante il cambio lingua

### Come Funziona
1. Gli elementi HTML hanno l'attributo `data-translate="chiave"`
2. Il file `translations.js` contiene tutte le traduzioni
3. La funzione `changeLanguage()` aggiorna i contenuti dinamicamente

### Aggiungere Nuove Traduzioni
Modifica il file `js/translations.js`:

```javascript
const translations = {
    it: {
        nuova_chiave: "Testo in italiano"
    },
    en: {
        nuova_chiave: "Text in English"
    }
};
```

Nell'HTML:
```html
<p data-translate="nuova_chiave">Testo in italiano</p>
```

## 🚀 Come Utilizzare

### Apertura del Sito
1. Naviga nella cartella `rock-band-site`
2. Apri `index.html` con un browser web
3. Oppure usa un server locale (consigliato):
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Poi apri http://localhost:8000
   ```

### Navigazione
- Usa il menu in alto per navigare tra le pagine
- Clicca sui pulsanti IT/EN per cambiare lingua
- Il sito ricorda la tua scelta di lingua

## 📄 Pagine del Sito

### 1. **Home** (`index.html`)
- Hero section con titolo animato
- Sezione "Chi Siamo"
- Ultime novità con cards

### 2. **Band** (`band.html`)
- Profili dei 4 membri della band
- Storia della band con timeline

### 3. **Music** (`music.html`)
- Discografia con 3 album
- Tracklist complete
- Link a piattaforme streaming

### 4. **Tour** (`tour.html`)
- Tabella con 12 date del tour europeo
- Informazioni VIP e merchandise
- Info pratiche per i concerti

### 5. **Contact** (`contact.html`)
- Form di contatto funzionante
- Informazioni di contatto (booking, press, management)
- Link social media
- Mappa placeholder

## 💻 Codice Commentato

Tutto il codice è **commentato in italiano** per facilitare la comprensione:

```html
<!-- ============================================
     HEADER E NAVIGAZIONE
     ============================================ -->
<header>
    <!-- Logo della band -->
    <div class="logo">⚡ THUNDER ROCKS</div>
    ...
</header>
```

```css
/* ============================================
   VARIABILI CSS PERSONALIZZABILI
   ============================================ */
:root {
    /* Colori principali - Modificabili per cambiare lo stile */
    --primary-color: #ff0000;
    ...
}
```

```javascript
// ============================================
// FUNZIONE PER CAMBIARE LINGUA
// ============================================
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
}
```

## 🎯 Caratteristiche Tecniche

### HTML5
- Tag semantici (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Meta tags ottimizzati per SEO
- Attributi accessibilità

### CSS3
- Flexbox e CSS Grid
- Variabili CSS (Custom Properties)
- Animazioni e transizioni
- Media queries per responsive design
- Gradients e shadows avanzati

### JavaScript
- ES6+ (arrow functions, template literals)
- LocalStorage per persistenza dati
- DOM manipulation
- Event handling
- Modular code structure

## 📱 Responsive Design

Il sito si adatta automaticamente a:
- **Desktop**: Layout completo con tutte le funzionalità
- **Tablet**: Layout ottimizzato per schermi medi
- **Mobile**: Navigazione verticale, dimensioni testo ottimizzate

Breakpoint principale: `768px`

## 🔧 Manutenzione e Estensioni

### Aggiungere una Nuova Pagina
1. Crea il file HTML (es. `gallery.html`)
2. Copia la struttura header/footer da una pagina esistente
3. Aggiungi il link nel menu di navigazione
4. Aggiungi le traduzioni in `translations.js`

### Modificare lo Stile
- Per cambi globali: modifica le variabili CSS in `:root`
- Per elementi specifici: cerca la classe nel file CSS

### Aggiungere Immagini
1. Salva le immagini nella cartella `images/`
2. Riferiscile nell'HTML con percorso relativo:
   ```html
   <img src="images/nome-immagine.jpg" alt="Descrizione">
   ```

## 📝 Note Importanti

- Il form di contatto è **simulato** - in produzione serve un backend
- Le icone social sono placeholder emoji - sostituire con icone vere
- Le immagini degli album sono placeholder - aggiungere immagini reali
- I link esterni (#) vanno sostituiti con URL reali
- **La musica di sfondo usa un sintetizzatore Web Audio API** - vedi `audio/README.md` per usare file MP3 reali

## 🎵 Player Musicale

Il sito include un **player musicale flottante** nell'angolo in basso a destra con:
- ▶️ Pulsante Play/Pause
- 🔊 Controllo Mute/Unmute
- 🎚️ Slider per il volume
- 🔁 Loop automatico della musica

### Musica Attuale
Attualmente usa musica **sintetizzata in tempo reale** con Web Audio API come placeholder.

### Per Usare File Audio Reali:
1. Aggiungi un file MP3 nella cartella `audio/` (nome: `background-rock.mp3`)
2. Segui le istruzioni in `audio/README.md`
3. Modifica `js/music-player.js` come indicato nei commenti

**Dove trovare musica rock royalty-free:**
- Free Music Archive: https://freemusicarchive.org/
- Incompetech: https://incompetech.com/
- YouTube Audio Library
- Bensound: https://www.bensound.com/

## 🎨 Temi Colore Suggeriti per Rock Band

```css
/* Tema Classic Rock */
--primary-color: #cc0000;
--accent-color: #ffcc00;

/* Tema Heavy Metal */
--primary-color: #000000;
--accent-color: #ff0000;

/* Tema Punk Rock */
--primary-color: #ff0066;
--accent-color: #00ff00;
```

## 📞 Supporto

Per domande o problemi con il sito:
- Controlla i commenti nel codice
- Verifica la console del browser per errori JavaScript
- Assicurati che tutti i file siano nella struttura corretta

## 🎸 Buon Rock! 🎸

---

**Sviluppato con ❤️ per Thunder Rocks**  
*Keep Rocking!* ⚡
