// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default behavior of the link

        const targetId = this.getAttribute('href').substring(1); // Get the target section id
        const targetSection = document.getElementById(targetId); // Get the target section

        // Smooth scroll to the section
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Offset to account for the fixed header height
            behavior: 'smooth'
        });
    });
});

// Scroll Animations for Sections
const sections = document.querySelectorAll('section');

const animateOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the section is visible in the viewport
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

// Add visibility class when section is in view
window.addEventListener('scroll', animateOnScroll);

// Initial check for section visibility on page load
document.addEventListener('DOMContentLoaded', animateOnScroll);
