document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger && nav) {
      burger.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Animate burger menu
        const lines = document.querySelectorAll('.burger div');
        lines.forEach(line => line.classList.toggle('toggle'));
      });
    }
    
    // Close mobile menu when nav links are clicked
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          
          const lines = document.querySelectorAll('.burger div');
          lines.forEach(line => line.classList.remove('toggle'));
        }
      });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Offset for fixed header
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add hover effects to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
    
    // Update year in footer copyright
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
    
    // Add animation for section titles on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.section-title').forEach(title => {
      observer.observe(title);
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
    });
  });
  
  // Additional CSS for animations to be added dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    
    .burger .toggle:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .burger .toggle:nth-child(2) {
      opacity: 0;
    }
    
    .burger .toggle:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `;
  
  document.head.appendChild(style);