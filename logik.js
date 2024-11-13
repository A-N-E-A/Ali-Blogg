// Hämta alla länkar i navbaren
const navbarLinks = document.querySelectorAll('.navbar a');

// Loopa genom alla länkar och lägg till en click-event
navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Ta bort "active" klass från alla länkar
        navbarLinks.forEach(link => link.classList.remove('active'));
        
        // Lägg till "active" klass på den klickade länken
        this.classList.add('active');
    });
});
