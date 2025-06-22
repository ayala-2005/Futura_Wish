//הצגת הסכום

let detal = document.getElementsByClassName('detail-value')[0]
detal.innerText = sessionStorage.getItem('totalprice')


// יצירת חלקיקים ברקע

function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // סוגים שונים של חלקיקים
        const types = ['', 'gold', 'pink'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        if (randomType) particle.classList.add(randomType);

        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

        container.appendChild(particle);
    }
}

// יצירת זיקוקים
function createFireworks() {
    const container = document.getElementById('fireworks');
    const colors = ['#ec80fa', '#ff4081', '#ffd700', '#00ff88', '#ff6b6b'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.background = colors[Math.floor(Math.random() * colors.length)];
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.top = Math.random() * 50 + 'vh';
firework.style.boxShadow = `0 0 20px ${firework.style.background}`;

            container.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 2000);
        }, i * 300);
    }
}

// אנימציית מספר הזמנה
function animateOrderNumber() {
    const orderNumberElement = document.getElementById('orderNumber');
    const chars = '0123456789ABCDEF';
    const finalNumber = 'ORD-2025-789456';
    let currentNumber = '';

    for (let i = 0; i < finalNumber.length; i++) {
        setTimeout(() => {
            if (finalNumber[i] === '-') {
                currentNumber += '-';
            } else {
                // אנימציה של המספר
                let iterations = 0;
                const interval = setInterval(() => {
                    currentNumber = currentNumber.slice(0, i) +
                        chars[Math.floor(Math.random() * chars.length)] +
                        currentNumber.slice(i + 1);
                    orderNumberElement.textContent = currentNumber;

                    iterations++;
                    if (iterations > 10) {
                        clearInterval(interval);
                        currentNumber = currentNumber.slice(0, i) + finalNumber[i] + currentNumber.slice(i + 1);
                        orderNumberElement.textContent = currentNumber;
                    }
                }, 50);
            }
        }, i * 100);
    }
}

// עדכון תאריך
function updateDate() {
    const today = new Date();
    const dateString = today.toLocaleDateString('he-IL');
    document.getElementById('orderDate').textContent = dateString;
}

// פונקציית המשך קנייה
function continueShopping() {
    window.location.href="./index.html"

}

// אפקט צליל (אופציונלי)
function playSuccessSound() {
    // ניתן להוסיף צליל הצלחה כאן
    console.log('🎵 צליל הצלחה!');
}

// הפעלת כל האנימציות
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    setTimeout(createFireworks, 1000);
    setTimeout(animateOrderNumber, 2000);
    updateDate();
    playSuccessSound();

    // זיקוקים נוספים כל 10 שניות
    setInterval(createFireworks, 10000);
});