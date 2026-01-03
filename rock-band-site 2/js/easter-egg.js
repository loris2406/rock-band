// ============================================
// EASTER EGG - KONAMI CODE
// ============================================
// Sequenza segreta: ↑ ↑ ↓ ↓ ← → ← → B A

(function() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 
        'ArrowDown', 'ArrowDown', 
        'ArrowLeft', 'ArrowRight', 
        'ArrowLeft', 'ArrowRight', 
        'KeyB', 'KeyA'
    ];
    
    let konamiIndex = 0;
    
    // Listener per la sequenza Konami
    document.addEventListener('keydown', (e) => {
        const key = e.code;
        
        if (key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Easter egg: animazione rock con fulmine e suono
    function activateEasterEgg() {
        // Crea overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(45deg, #ff0000, #8b0000, #ff0000);
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            animation: flashBg 0.2s infinite;
        `;
        
        // Testo easter egg
        const text = document.createElement('div');
        text.innerHTML = `
            <div style="text-align: center; color: white; font-family: 'Arial Black', sans-serif;">
                <div style="font-size: 8rem; animation: shake 0.5s infinite;">⚡</div>
                <h1 style="font-size: 4rem; margin: 2rem 0; text-shadow: 0 0 20px #ffd700;">
                    ROCK MODE ACTIVATED!
                </h1>
                <p style="font-size: 1.5rem; opacity: 0.9;">
                    🎸 You've unlocked the secret Thunder Rocks power! 🎸
                </p>
                <p style="font-size: 1rem; margin-top: 2rem; opacity: 0.7;">
                    (Clicca ovunque per chiudere)
                </p>
            </div>
        `;
        overlay.appendChild(text);
        
        // Aggiungi animazioni CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes flashBg {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.8; }
            }
            @keyframes shake {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(-15deg) scale(1.2); }
                75% { transform: rotate(15deg) scale(1.2); }
            }
        `;
        document.head.appendChild(style);
        
        // Aggiungi al body
        document.body.appendChild(overlay);
        
        // Suono di chitarra simulato (vibrazione su mobile)
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100, 50, 200]);
        }
        
        // Animazione confetti fulmini
        createLightningConfetti();
        
        // Chiudi al click
        overlay.addEventListener('click', () => {
            overlay.style.animation = 'fadeOut 0.5s';
            setTimeout(() => {
                overlay.remove();
                style.remove();
            }, 500);
        });
        
        // Auto-chiusura dopo 5 secondi
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                overlay.click();
            }
        }, 5000);
    }
    
    // Crea effetto confetti con fulmini
    function createLightningConfetti() {
        const symbols = ['⚡', '🎸', '🎵', '🔥', '⭐'];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                confetti.style.cssText = `
                    position: fixed;
                    top: -50px;
                    left: ${Math.random() * 100}vw;
                    font-size: ${Math.random() * 3 + 2}rem;
                    z-index: 100000;
                    pointer-events: none;
                    animation: fall ${Math.random() * 2 + 3}s linear;
                `;
                
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 5000);
            }, i * 100);
        }
        
        // Animazione caduta
        if (!document.getElementById('confetti-style')) {
            const confettiStyle = document.createElement('style');
            confettiStyle.id = 'confetti-style';
            confettiStyle.textContent = `
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
                @keyframes fadeOut {
                    to { opacity: 0; }
                }
            `;
            document.head.appendChild(confettiStyle);
        }
    }
    
    // Easter egg bonus: triplo click sul logo
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        let clickCount = 0;
        let clickTimer;
        
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            clickCount++;
            
            clearTimeout(clickTimer);
            
            if (clickCount === 3) {
                miniEasterEgg();
                clickCount = 0;
            }
            
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 500);
        });
    });
    
    // Mini easter egg per triplo click
    function miniEasterEgg() {
        const logo = document.querySelector('.logo');
        const originalText = logo.textContent;
        
        logo.style.animation = 'shake 0.5s';
        logo.textContent = '🔥 THUNDER ROCKS! 🔥';
        
        setTimeout(() => {
            logo.style.animation = '';
            logo.textContent = originalText;
        }, 2000);
        
        // Vibrazione breve
        if ('vibrate' in navigator) {
            navigator.vibrate(200);
        }
    }
})();
