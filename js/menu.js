let namem = document.getElementsByClassName('user-avatar')[0];
let userName = sessionStorage.getItem('userName');
if (userName) {
    namem.innerText = userName.charAt(0).toUpperCase();
} else {
    namem.innerText = 'אורח';
}

// עיגול סל
let basketCount = JSON.parse(localStorage.getItem('basket'))
let circle = document.getElementById('cart-count')
circle.textContent = basketCount.length
