let basis = document.getElementsByClassName('cart-items')[0]
let basket = JSON.parse(localStorage.getItem('basket'))

// בדיקה שהאלמנטים קיימים
console.log('basis element:', basis)
console.log('basket data:', basket)

//בדיקה סל קיים
if (basket === null || basket.length === 0) {
    basis.innerHTML = `
        <div class="empty-cart">
            <div class="empty-cart-icon">🛒</div>
            <h3>הסל שלך ריק</h3>
            <p>הוסף מוצרים כדי להתחיל לקנות!</p>
        </div>
    `;
}
else {
    // ניקוי הבסיס לפני הוספת פריטים
    basis.innerHTML = '';
    
    for (let index = 0; index < basket.length; index++) {
        //div class="cart-item"
        let carti = document.createElement('div')
        carti.className = "cart-item"
        
        // img 
        let img = document.createElement('img')
        img.src = basket[index].pic
        img.className = "item-image"
        
        //div class="item-details"
        let itemd = document.createElement('div')
        itemd.className = "item-details"
        
        //div class="item-name"
        let itemn = document.createElement('div')
        itemn.className = "item-name"
        itemn.innerText = basket[index].title
        
        //div class="item-price"
        let itemp = document.createElement('div')
        itemp.className = "item-price"
        itemp.innerText = basket[index].price
        
        //button class="remove-btn"
        let button = document.createElement('button')
        button.className = "remove-btn"
        button.innerText = "הסר מהסל"
        button.setAttribute('Date-title', basket[index].title)
        button.addEventListener('click', delItem)

        carti.appendChild(img)
        itemd.appendChild(itemn)
        itemd.appendChild(itemp)
        carti.appendChild(itemd)
        carti.appendChild(button)
        basis.appendChild(carti)
    }
}

// פונקציה  למחיקת פריט
function delItem(){
    let me = event.currentTarget
    let titleMe = me.getAttribute('Date-title')
    
    for (let index = 0; index < basket.length; index++) {
        if(basket[index].title == titleMe){
            basket.splice(index, 1)
            break
        }
    }
    
    localStorage.setItem('basket', JSON.stringify(basket))
    
    // // מחק את האלמנט מהדף
    // me.parentElement.remove()
    
      //אנימציה יפה למחיקה
me.parentElement.style.animation = 'itemFadeOut 0.5s ease-out forwards';
//לחכות כמה שניות כדי שיראו את האנימציה
setTimeout(() => {
  me.parentElement.remove() 
}, 500); 

    // בדיקה אם הסל ריק ועדכון התצוגה
    if (basket.length === 0) {
        basis.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>הסל שלך ריק</h3>
                <p>הוסף מוצרים כדי להתחיל לקנות!</p>
            </div>
        `;
    }
    
    // עדכון עיגול סל
    let basketCount = JSON.parse(localStorage.getItem('basket'))
let circle = document.getElementById('cart-count')
circle.textContent = basketCount.length
    // עדכון מספר פריטים בסל
    updateCartCount()
}

// עדכון סכום הסל
function updateCartCount(){
    let count = 0
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    
    if (!Array.isArray(basket)) {
        basket = []
    }

    for (let index = 0; index < basket.length; index++){
        let priceString = basket[index].price  
        
        // הסרת הסימן ₪ והפסיקים
        let cleanPrice = priceString.replace('₪', '').replace(/,/g, '').trim()
        let num = parseFloat(cleanPrice)
        
        if (!isNaN(num)) {
            count += num // חיבור המחיר!
        }
    }
    
    let subtotal = document.getElementById('subtotal')
        subtotal.innerText = '₪' + count.toLocaleString()

        tot=count+15
        let total=document.getElementById('total')
        total.innerText = '₪' + tot.toLocaleString()
}

// קריאה לעדכון הסכום
updateCartCount()


function checkout() {
    let sum = document.getElementById('total').innerText;
let sumclear = sum.replace(/[^\d.]/g, ''); // מסיר כל מה שלא ספרה או נקודה
sumclear = parseFloat(sumclear);
console.log(sumclear);
    

    if (sumclear > 15) {
        console.log("עבר את התנאי!");
        let name = document.getElementsByClassName('user-avatar')[0].innerText
        console.log(name);
        
        if (name == 'אורח')
            window.location.href = "./login.html"
        else {
            sessionStorage.setItem('totalprice', sum)

            setTimeout(() => {
                let basket = JSON.parse(localStorage.getItem('basket')) || []
                basket=[]
                localStorage.setItem('basket', JSON.stringify(basket))
                window.location.href ="./payment.html";
            }, 2000);
        }

    }
}