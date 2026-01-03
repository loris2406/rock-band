// ============================================
// SISTEMA PER GESTIRE I MODAL (POP-UP)
// ============================================
// Questo file gestisce l'apertura e chiusura dei modal per Privacy Policy e Termini di Servizio

// ============================================
// CARICA IL CONTENUTO DEI MODAL ALL'AVVIO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Carica il contenuto dei modal dal file esterno
    fetch('modals-content.html')
        .then(response => response.text())
        .then(data => {
            // Crea un div temporaneo per contenere il markup HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            
            // Aggiungi i modal al body
            document.body.appendChild(tempDiv);
        })
        .catch(error => {
            console.error('Errore nel caricamento dei modal:', error);
        });
});

// ============================================
// FUNZIONE PER APRIRE IL MODAL PRIVACY POLICY
// ============================================
function openPrivacyModal() {
    const modal = document.getElementById('privacyModal');
    if (modal) {
        modal.style.display = 'flex';
        // Previene lo scroll della pagina sottostante
        document.body.style.overflow = 'hidden';
    }
}

// ============================================
// FUNZIONE PER APRIRE IL MODAL TERMINI DI SERVIZIO
// ============================================
function openTermsModal() {
    const modal = document.getElementById('termsModal');
    if (modal) {
        modal.style.display = 'flex';
        // Previene lo scroll della pagina sottostante
        document.body.style.overflow = 'hidden';
    }
}

// ============================================
// FUNZIONE PER CHIUDERE I MODAL
// ============================================
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        // Ripristina lo scroll della pagina
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// CHIUDI MODAL CLICCANDO FUORI DAL CONTENUTO
// ============================================
window.onclick = function(event) {
    const privacyModal = document.getElementById('privacyModal');
    const termsModal = document.getElementById('termsModal');
    
    // Se clicco sul background del modal (non sul contenuto), chiudi
    if (privacyModal && event.target === privacyModal) {
        closeModal('privacyModal');
    }
    if (termsModal && event.target === termsModal) {
        closeModal('termsModal');
    }
}

// ============================================
// CHIUDI MODAL CON TASTO ESC
// ============================================
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal('privacyModal');
        closeModal('termsModal');
    }
});
