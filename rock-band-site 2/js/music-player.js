// ============================================
// PLAYER MUSICA DI SFONDO
// ============================================
// Questo file gestisce la riproduzione della musica di sfondo

// Variabili globali per il player
let isPlaying = false;
let isMuted = false;
let currentVolume = 0.3; // Volume iniziale al 30%

// ============================================
// INIZIALIZZAZIONE AL CARICAMENTO DELLA PAGINA
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createMusicPlayer();
    initializeAudioControls();
});

// ============================================
// CREA IL PLAYER MUSICALE NELL'INTERFACCIA
// ============================================
function createMusicPlayer() {
    // Crea il container del player
    const playerHTML = `
        <div id="musicPlayer" class="music-player">
            <!-- Icona musicale -->
            <div class="player-icon">🎸</div>
            
            <!-- Informazioni traccia -->
            <div class="player-info">
                <div class="track-title">Thunder Rocks</div>
                <div class="track-subtitle">Background Music</div>
            </div>
            
            <!-- Controlli -->
            <div class="player-controls">
                <!-- Pulsante Play/Pause -->
                <button id="playPauseBtn" class="control-btn" title="Play/Pause">
                    <span class="play-icon">▶️</span>
                </button>
                
                <!-- Pulsante Mute/Unmute -->
                <button id="muteBtn" class="control-btn" title="Mute/Unmute">
                    <span class="volume-icon">🔊</span>
                </button>
                
                <!-- Controllo volume -->
                <input type="range" id="volumeSlider" class="volume-slider" 
                       min="0" max="100" value="30" title="Volume">
            </div>
            
            <!-- Elemento audio (nascosto) -->
            <audio id="bgAudio" loop>
                <!-- Qui andrebbe il file audio reale -->
                <!-- Per ora usiamo un placeholder -->
            </audio>
        </div>
    `;
    
    // Aggiunge il player al body
    document.body.insertAdjacentHTML('beforeend', playerHTML);
}

// ============================================
// INIZIALIZZA I CONTROLLI AUDIO
// ============================================
function initializeAudioControls() {
    const audio = document.getElementById('bgAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    
    // Imposta il volume iniziale
    if (audio) {
        audio.volume = currentVolume;
    }
    
    // Event listener per Play/Pause
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlayPause);
    }
    
    // Event listener per Mute/Unmute
    if (muteBtn) {
        muteBtn.addEventListener('click', toggleMute);
    }
    
    // Event listener per il volume slider
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            changeVolume(e.target.value / 100);
        });
    }
    
    // Simula l'audio con oscillatori Web Audio API (per demo)
   //createSyntheticRockMusic();
    loadRealAudio(); // Carica file audio reali se disponibili
}

// ============================================
// TOGGLE PLAY/PAUSE
// ============================================
function togglePlayPause() {
    const playIcon = document.querySelector('.play-icon');
    const audio = document.getElementById('bgAudio');
    
    if (isPlaying) {
        // Pausa
        if (audio && audio.pause) {
            audio.pause();
        }
        playIcon.textContent = '▶️';
        isPlaying = false;
        stopSyntheticMusic();
    } else {
        // Play
        if (audio && audio.play) {
            audio.play().catch(err => console.log('Audio play error:', err));
        }
        playIcon.textContent = '⏸️';
        isPlaying = true;
        startSyntheticMusic();
    }
}

// ============================================
// TOGGLE MUTE/UNMUTE
// ============================================
function toggleMute() {
    const volumeIcon = document.querySelector('.volume-icon');
    const audio = document.getElementById('bgAudio');
    
    if (isMuted) {
        // Unmute
        if (audio) {
            audio.muted = false;
        }
        volumeIcon.textContent = '🔊';
        isMuted = false;
        if (audioContext && gainNode) {
            gainNode.gain.value = currentVolume;
        }
    } else {
        // Mute
        if (audio) {
            audio.muted = true;
        }
        volumeIcon.textContent = '🔇';
        isMuted = true;
        if (audioContext && gainNode) {
            gainNode.gain.value = 0;
        }
    }
}

// ============================================
// CAMBIA VOLUME
// ============================================
function changeVolume(value) {
    currentVolume = value;
    const audio = document.getElementById('bgAudio');
    
    if (audio) {
        audio.volume = value;
    }
    
    // Aggiorna anche il gain del sintetizzatore
    if (audioContext && gainNode && !isMuted) {
        gainNode.gain.value = value;
    }
    
    // Aggiorna l'icona del volume
    const volumeIcon = document.querySelector('.volume-icon');
    if (value === 0) {
        volumeIcon.textContent = '🔇';
    } else if (value < 0.5) {
        volumeIcon.textContent = '🔉';
    } else {
        volumeIcon.textContent = '🔊';
    }
}

// ============================================
// MUSICA SINTETICA CON WEB AUDIO API
// (Usata come placeholder per demo)
// ============================================
let audioContext = null;
let gainNode = null;
let oscillators = [];

function createSyntheticRockMusic() {
    try {
        // Crea il contesto audio
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Crea il nodo gain per il controllo volume
        gainNode = audioContext.createGain();
        gainNode.gain.value = currentVolume;
        gainNode.connect(audioContext.destination);
    } catch (e) {
        console.log('Web Audio API non supportata:', e);
    }
}

function startSyntheticMusic() {
    if (!audioContext || !gainNode) return;
    
    // Pulisce oscillatori precedenti
    stopSyntheticMusic();
    
    try {
        // Crea un pattern ritmico rock-style
        // Basso (nota fondamentale)
        const bass = audioContext.createOscillator();
        bass.type = 'sawtooth';
        bass.frequency.value = 82.41; // E2
        bass.connect(gainNode);
        bass.start();
        oscillators.push(bass);
        
        // Power chord - quinta
        const fifth = audioContext.createOscillator();
        fifth.type = 'square';
        fifth.frequency.value = 123.47; // B2
        fifth.connect(gainNode);
        fifth.start();
        oscillators.push(fifth);
        
        // Aggiunge un filtro per rendere il suono più rock
        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        filter.Q.value = 5;
        
        // Ricollega con filtro
        oscillators.forEach(osc => {
            osc.disconnect();
            osc.connect(filter);
        });
        filter.connect(gainNode);
        
        // Pattern ritmico con modulazione
        setInterval(() => {
            if (isPlaying && bass && fifth) {
                // Cambia le frequenze per creare un pattern
                const notes = [
                    [82.41, 123.47],   // E
                    [110.00, 164.81],  // A
                    [73.42, 110.00],   // D
                    [98.00, 146.83]    // G
                ];
                const randomNote = notes[Math.floor(Math.random() * notes.length)];
                bass.frequency.setValueAtTime(randomNote[0], audioContext.currentTime);
                fifth.frequency.setValueAtTime(randomNote[1], audioContext.currentTime);
            }
        }, 2000);
        
    } catch (e) {
        console.log('Errore nella creazione della musica sintetica:', e);
    }
}

function stopSyntheticMusic() {
    oscillators.forEach(osc => {
        try {
            osc.stop();
            osc.disconnect();
        } catch (e) {
            // Ignora errori se già fermato
        }
    });
    oscillators = [];
}

// ============================================
// NOTA: Per usare file audio reali
// ============================================
// Decommentare e modificare questa funzione per usare file MP3 reali:

function loadRealAudio() {
    const audio = document.getElementById('bgAudio');
    
    // Aggiungi le sorgenti audio
    audio.innerHTML = `
        <source src="audio/background-rock.mp3" type="audio/mpeg">
    `;
    
    // Carica l'audio
    audio.load();
}

