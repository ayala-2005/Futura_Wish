// יצירת כוכבים דינמית
        function createStars() {
            const starsContainer = document.querySelector('.stars');
            const numberOfStars = 150;
            
            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 3 + 2) + 's';
                starsContainer.appendChild(star);
            }
        }
        
        // אפקט עקיבה עכבר עדין
        document.addEventListener('mousemove', (e) => {
            const orbs = document.querySelectorAll('.floating-orb');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.02;
                const x = mouseX * 20 - 10;
                const y = mouseY * 20 - 10;
                
                orb.style.transform += ` translate(${x * speed}px, ${y * speed}px)`;
            });
        });
        
        // אנימציה של כניסה לתוכן בגלילה
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // התחלה
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            
            // הוספת אנימציות כניסה לאלמנטים
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'all 0.8s ease';
                observer.observe(section);
            });
        });