// Set current year in footer copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.project-card, .skills-container, .about-text p');
  
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    
    // Check if element is in viewport
    if(position.top < window.innerHeight && position.bottom >= 0) {
      // Add animation class if not already added
      if(!element.classList.contains('animate')) {
        element.classList.add('animate');
        
        // Apply a subtle fade-in-up animation
        element.style.animation = 'fadeInUp 0.6s ease forwards';
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
      }
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add hover effects to projects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
  });
});
