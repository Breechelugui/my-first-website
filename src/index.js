// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Add fade-in animation to sections when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.3s';
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Add smooth scrolling for better user experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add click effects for interactive elements
    document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Console message for developers who inspect the code
    console.log('👋 Hello fellow developer! This portfolio was built by Brendah Chelugui as her first web development project. Feel free to connect with her!');
});

// Contact functions
function callPhone() {
    window.open('tel:+254791827949', '_self');
}

function sendEmail() {
    window.open('mailto:brendah.jebet@student.moringaschool.com?subject=Hello Brendah!&body=Hi Brendah, I found your portfolio and would love to connect!', '_self');
}

function downloadResume() {
    alert('Resume download feature coming soon! Please contact me directly for my latest resume.');
}

function viewProjects() {
    alert('More projects coming soon as I continue my journey at Moringa School!');
}

// Typing animation for subtitle
function startTypingAnimation() {
    const subtitle = document.querySelector('.typing-animation');
    const text = 'Software Developer in Training';
    subtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// Start typing animation when page loads
window.addEventListener('load', startTypingAnimation);