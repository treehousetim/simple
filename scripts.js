document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
        });
    });
});
