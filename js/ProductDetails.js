document.querySelector('.add-to-cart').addEventListener('click', function (e) {
    // יצירת אפקט של גלים
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255,255,255,0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);


    // הוספת CSS לאנימציית הגלים
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
});
let pics = document.getElementsByClassName('thumb');

// קודם מפענחים את ה־JSON חזרה למערך
let picssession = JSON.parse(sessionStorage.getItem('who'));
let examplesArray = picssession.examples;

for (let index = 0; index < examplesArray.length; index++) {
    pics[index].style.backgroundImage = `url('${examplesArray[index].pic}')`;
}
pic(0)
function pic(num) {
    let main = document.getElementsByClassName('main-image')[0]
    main.style.backgroundImage = `url('${examplesArray[num].pic}')`

    let title = document.getElementsByClassName('title-box fade-in-element')[0]
    title.innerText = examplesArray[num].title

    let spans = document.getElementsByClassName('detail-value')
    spans[0].innerText = examplesArray[num].funnyDescription
    spans[1].innerText = picssession.category
    spans[2].innerText = examplesArray[num].time
    spans[3].innerText = examplesArray[num].price

    // לפעמים לעשות מבצע לוהט ולפעמים לא
    let bool = Math.floor(Math.random() * 2)
    let hot = document.getElementsByClassName('badge')[0]
    if (bool == 0) {
        hot.style.display = 'none'
    }
    else {
        hot.style.display = 'block'
    }
}

function add() {
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    let title1 = document.getElementsByClassName('title-box fade-in-element')[0].innerText
    let isOne=true
    if (!Array.isArray(basket)) {
        basket = []
    }
    // בדיקה שלא קיים כזה מוצר
for(let num=0;num<basket.length;num++){
if(basket[num].title==title1){
    isOne=false
    break
}
}
if(isOne){

    for (let index = 0; index < examplesArray.length; index++) {
        if (examplesArray[index].title == title1) {
            basket.push(examplesArray[index])

            let sal = document.getElementsByClassName('add-to-cart fade-in-element')[0]

            //  הזזת הסל - אנימציה:
            document.querySelector('.cart-icon').classList.add('shake-sideways');
            setTimeout(() => {
                document.querySelector('.cart-icon').classList.remove('shake-sideways');
            }, 500); // מסיר אחרי חצי שנייה

        }
    }

    localStorage.setItem('basket', JSON.stringify(basket))
    // לעדכן את העיגול מעל הסל
    let basketCount = JSON.parse(localStorage.getItem('basket'))
    let circle = document.getElementById('cart-count')
    circle.textContent = basketCount.length
}
}

// לפעמים לעשות מבצע לוהט ולפעמים לא
let bool = Math.floor(Math.random() * 2)
if (bool == 0) {
    let hot = document.getElementsByClassName('badge')[0]
    hot.style.display = 'none'
}


// כפתור חזרה
function goBack() {
    window.history.back();
}