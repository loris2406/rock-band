// ============================================
// SISTEMA DI TRADUZIONE MULTILINGUA
// ============================================
// Questo file gestisce le traduzioni del sito in italiano e inglese

// Oggetto contenente tutte le traduzioni
const translations = {
    it: {
        // Navigazione
        nav_home: "Home",
        nav_band: "Band",
        nav_music: "Musica",
        nav_tour: "Tour",
        nav_contact: "Contatti",
        
        // Home page
        home_hero_title: "Thunder Rocks",
        home_hero_subtitle: "L'energia del rock che scuote l'anima",
        home_hero_button: "Scopri di più",
        home_about_title: "Chi Siamo",
        home_about_text: "Thunder Rocks è una band che fonde rock classico e moderne sonorità heavy metal. Nata nel 2018, la band ha conquistato il pubblico con la sua energia esplosiva e testi che parlano di libertà, passione e ribellione.",
        home_latest_title: "Ultime Novità",
        home_latest_album: "Nuovo Album in Arrivo",
        home_latest_album_text: "Il nostro terzo album 'Electric Storm' sarà disponibile da marzo 2026!",
        home_latest_tour: "Tour Europeo 2026",
        home_latest_tour_text: "Vieni a vederci dal vivo nelle principali città europee!",
        home_social_title: "🎸 Seguici",
        home_social_text: "Resta aggiornato sulle nostre ultime news e contenuti esclusivi sui social media!",
        
        // Band page
        band_title: "La Band",
        band_subtitle: "Incontra i membri di Thunder Rocks",
        band_member1_name: "Marco 'Thunder' Rossi",
        band_member1_role: "Voce principale & Chitarra ritmica",
        band_member1_bio: "Fondatore della band, Marco porta con sé 15 anni di esperienza nel mondo del rock. La sua voce potente e le sue liriche intense sono il marchio distintivo di Thunder Rocks.",
        band_member2_name: "Laura 'Lightning' Bianchi",
        band_member2_role: "Chitarra solista",
        band_member2_bio: "Virtuosa della chitarra, Laura è conosciuta per i suoi assoli mozzafiato e il suo stile tecnico unico che fonde metal e blues.",
        band_member3_name: "Paolo 'Storm' Verdi",
        band_member3_role: "Basso",
        band_member3_bio: "Il groove di Paolo è la spina dorsale del sound della band. Con il suo basso a 5 corde, crea linee potenti e profonde.",
        band_member4_name: "Andrea 'Bolt' Neri",
        band_member4_role: "Batteria",
        band_member4_bio: "Andrea è la forza motrice dietro la batteria. I suoi ritmi esplosivi e la sua energia inarrestabile danno vita al sound di Thunder Rocks.",
        
        // Music page
        music_title: "La Nostra Musica",
        music_subtitle: "Discografia e Brani",
        music_album1_title: "Thunderstrike",
        music_album1_year: "2019",
        music_album1_desc: "Il nostro album di debutto che ha stabilito il nostro sound unico.",
        music_album2_title: "Rise of the Storm",
        music_album2_year: "2022",
        music_album2_desc: "Il secondo album che ci ha portato al successo internazionale.",
        music_album3_title: "Electric Storm",
        music_album3_year: "2026 (In arrivo)",
        music_album3_desc: "Il nostro album più ambizioso, che spinge i confini del rock moderno.",
        music_album3_coming: "🎵 In arrivo a Marzo 2026!",
        music_album3_detail: "Il nostro terzo album è il risultato di due anni di lavoro intenso. Aspettati un sound ancora più potente, testi più profondi e collaborazioni speciali!",
        music_preorder: "Pre-Order Now!",
        music_listen: "Ascolta su Spotify",
        music_spotify_title: "Spotify",
        music_spotify_text: "Ascolta tutti i nostri album e playlist curate su Spotify.",
        music_spotify_btn: "Ascolta ora",
        music_youtube_title: "YouTube",
        music_youtube_text: "Guarda i nostri video musicali e performance live.",
        music_youtube_btn: "Guarda ora",
        music_apple_title: "Apple Music",
        music_apple_text: "Disponibile anche su Apple Music per tutti i dispositivi.",
        music_apple_btn: "Ascolta ora",
        
        // Tour page
        tour_title: "Date del Tour",
        tour_subtitle: "Vieni a vederci dal vivo!",
        tour_date: "Data",
        tour_city: "Città",
        tour_venue: "Locale",
        tour_tickets: "Biglietti",
        tour_buy: "Acquista",
        tour_soldout: "Sold Out",
        tour_map_title: "🗺️ Mappa del Tour",
        tour_map_subtitle: "Esplora le location dei nostri concerti sulla mappa interattiva",
        tour_info_title: "ℹ️ Info Tour",
        tour_vip_title: "🌟 VIP Package",
        tour_vip_text: "Vivi un'esperienza esclusiva con il nostro pacchetto VIP:",
        tour_vip_item1: "Meet & Greet con la band",
        tour_vip_item2: "Foto firmata",
        tour_vip_item3: "Merchandise esclusivo",
        tour_vip_item4: "Accesso prioritario",
        tour_vip_item5: "Posti in prima fila",
        tour_merch_title: "👕 Merchandise",
        tour_merch_text: "In ogni data del tour troverai il nostro merchandise ufficiale:",
        tour_merch_item1: "T-shirt tour edition",
        tour_merch_item2: "Felpe e giacche",
        tour_merch_item3: "Poster firmati",
        tour_merch_item4: "Vinili e CD",
        tour_merch_item5: "Accessori vari",
        tour_general_title: "📋 Informazioni",
        tour_general_text: "Tutto quello che devi sapere:",
        tour_general_item1: "Porte aperte: 19:00",
        tour_general_item2: "Inizio concerto: 21:00",
        tour_general_item3: "Durata: circa 2 ore",
        tour_general_item4: "Età minima: 16 anni",
        tour_general_item5: "I biglietti non sono rimborsabili",
        
        // Contact page
        contact_title: "Contattaci",
        contact_subtitle: "Resta in contatto con noi",
        contact_name: "Nome",
        contact_name_placeholder: "Il tuo nome",
        contact_email: "Email",
        contact_email_placeholder: "tua@email.com",
        contact_message: "Messaggio",
        contact_message_placeholder: "Scrivi il tuo messaggio qui...",
        contact_send: "Invia Messaggio",
        contact_info_title: "Informazioni",
        contact_booking: "Booking:",
        contact_press: "Ufficio Stampa:",
        contact_management: "Management:",
        contact_address: "Indirizzo:",
        contact_social: "Seguici sui Social",
        
        // Footer
        footer_rights: "© 2026 Thunder Rocks. Tutti i diritti riservati.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Termini di Servizio"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_band: "Band",
        nav_music: "Music",
        nav_tour: "Tour",
        nav_contact: "Contact",
        
        // Home page
        home_hero_title: "Thunder Rocks",
        home_hero_subtitle: "The energy of rock that shakes the soul",
        home_hero_button: "Discover More",
        home_about_title: "About Us",
        home_about_text: "Thunder Rocks is a band that blends classic rock and modern heavy metal sounds. Born in 2018, the band has captivated audiences with its explosive energy and lyrics about freedom, passion, and rebellion.",
        home_latest_title: "Latest News",
        home_latest_album: "New Album Coming",
        home_latest_album_text: "Our third album 'Electric Storm' will be available from March 2026!",
        home_latest_tour: "European Tour 2026",
        home_latest_tour_text: "Come see us live in major European cities!",
        home_social_title: "🎸 Follow Us",
        home_social_text: "Stay updated with our latest news and exclusive content on social media!",
        
        // Band page
        band_title: "The Band",
        band_subtitle: "Meet the members of Thunder Rocks",
        band_member1_name: "Marco 'Thunder' Rossi",
        band_member1_role: "Lead Vocals & Rhythm Guitar",
        band_member1_bio: "Band founder, Marco brings 15 years of experience in the rock world. His powerful voice and intense lyrics are Thunder Rocks' trademark.",
        band_member2_name: "Laura 'Lightning' Bianchi",
        band_member2_role: "Lead Guitar",
        band_member2_bio: "Guitar virtuoso, Laura is known for her breathtaking solos and unique technical style that blends metal and blues.",
        band_member3_name: "Paolo 'Storm' Verdi",
        band_member3_role: "Bass",
        band_member3_bio: "Paolo's groove is the backbone of the band's sound. With his 5-string bass, he creates powerful and deep lines.",
        band_member4_name: "Andrea 'Bolt' Neri",
        band_member4_role: "Drums",
        band_member4_bio: "Andrea is the driving force behind the drums. His explosive rhythms and unstoppable energy bring Thunder Rocks' sound to life.",
        
        // Music page
        music_title: "Our Music",
        music_subtitle: "Discography and Songs",
        music_album1_title: "Thunderstrike",
        music_album1_year: "2019",
        music_album1_desc: "Our debut album that established our unique sound.",
        music_album2_title: "Rise of the Storm",
        music_album2_year: "2022",
        music_album2_desc: "The second album that brought us international success.",
        music_album3_title: "Electric Storm",
        music_album3_year: "2026 (Coming Soon)",
        music_album3_desc: "Our most ambitious album, pushing the boundaries of modern rock.",
        music_album3_coming: "🎵 Coming in March 2026!",
        music_album3_detail: "Our third album is the result of two years of intense work. Expect an even more powerful sound, deeper lyrics and special collaborations!",
        music_preorder: "Pre-Order Now!",
        music_listen: "Listen on Spotify",
        music_spotify_title: "Spotify",
        music_spotify_text: "Listen to all our albums and curated playlists on Spotify.",
        music_spotify_btn: "Listen Now",
        music_youtube_title: "YouTube",
        music_youtube_text: "Watch our music videos and live performances.",
        music_youtube_btn: "Watch Now",
        music_apple_title: "Apple Music",
        music_apple_text: "Also available on Apple Music for all devices.",
        music_apple_btn: "Listen Now",
        
        // Tour page
        tour_title: "Tour Dates",
        tour_subtitle: "Come see us live!",
        tour_date: "Date",
        tour_city: "City",
        tour_venue: "Venue",
        tour_tickets: "Tickets",
        tour_buy: "Buy",
        tour_soldout: "Sold Out",
        tour_map_title: "🗺️ Tour Map",
        tour_map_subtitle: "Explore our concert locations on the interactive map",
        tour_info_title: "ℹ️ Tour Info",
        tour_vip_title: "🌟 VIP Package",
        tour_vip_text: "Experience an exclusive experience with our VIP package:",
        tour_vip_item1: "Meet & Greet with the band",
        tour_vip_item2: "Signed photo",
        tour_vip_item3: "Exclusive merchandise",
        tour_vip_item4: "Priority access",
        tour_vip_item5: "Front row seats",
        tour_merch_title: "👕 Merchandise",
        tour_merch_text: "At every tour date you'll find our official merchandise:",
        tour_merch_item1: "Tour edition T-shirts",
        tour_merch_item2: "Hoodies and jackets",
        tour_merch_item3: "Signed posters",
        tour_merch_item4: "Vinyls and CDs",
        tour_merch_item5: "Various accessories",
        tour_general_title: "📋 Information",
        tour_general_text: "Everything you need to know:",
        tour_general_item1: "Doors open: 7:00 PM",
        tour_general_item2: "Concert starts: 9:00 PM",
        tour_general_item3: "Duration: about 2 hours",
        tour_general_item4: "Minimum age: 16 years",
        tour_general_item5: "Tickets are non-refundable",
        
        // Contact page
        contact_title: "Contact Us",
        contact_subtitle: "Stay in touch with us",
        contact_name: "Name",
        contact_name_placeholder: "Your name",
        contact_email: "Email",
        contact_email_placeholder: "your@email.com",
        contact_message: "Message",
        contact_message_placeholder: "Write your message here...",
        contact_send: "Send Message",
        contact_info_title: "Information",
        contact_booking: "Booking:",
        contact_press: "Press Office:",
        contact_management: "Management:",
        contact_address: "Address:",
        contact_social: "Follow Us on Social Media",
        
        // Footer
        footer_rights: "© 2026 Thunder Rocks. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service"
    }
};

// Variabile per la lingua corrente
let currentLanguage = localStorage.getItem('language') || 'it';

// ============================================
// FUNZIONE PER CAMBIARE LINGUA
// ============================================
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
    updateLanguageButtons();
}

// ============================================
// FUNZIONE PER AGGIORNARE IL CONTENUTO DELLA PAGINA
// ============================================
function updatePageContent() {
    // Seleziona tutti gli elementi con attributo data-translate
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[currentLanguage][key];
        
        if (translation) {
            // Se l'elemento è un input o textarea, aggiorna il placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Gestione separata per placeholder con data-translate-placeholder
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = translations[currentLanguage][key];
        
        if (translation) {
            element.placeholder = translation;
        }
    });
}

// ============================================
// FUNZIONE PER AGGIORNARE I PULSANTI DELLA LINGUA
// ============================================
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        const lang = button.getAttribute('data-lang');
        if (lang === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// ============================================
// INIZIALIZZAZIONE AL CARICAMENTO DELLA PAGINA
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    updateLanguageButtons();
    
    // Aggiunge event listener ai pulsanti di cambio lingua
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});
