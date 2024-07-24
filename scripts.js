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

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});

function createAutoSlideshow(containerSelector, interval = 3000) {
	// Ensure the document is fully loaded before executing the script
	document.addEventListener('DOMContentLoaded', () => {
		const container = document.querySelector(containerSelector);

		if (!container) {
			console.error(`No element found with the selector: ${containerSelector}`);
			return;
		}

		const slides = container.children;
		let currentIndex = 0;

		if (slides.length === 0) {
			console.warn(`The container with selector ${containerSelector} has no child elements.`);
			return;
		}

		// Hide all slides except the first one
		for (let i = 1; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		// Function to show the next slide
		function showNextSlide() {
			slides[currentIndex].style.display = 'none';
			currentIndex = (currentIndex + 1) % slides.length;
			slides[currentIndex].style.display = 'block';
		}

		// Set the interval to show the next slide
		setInterval(showNextSlide, interval);
	});
}

// Usage example: Call this function with the selector of the container element
createAutoSlideshow('#tagline-scroller', 5000 );

