let pruducts = JSON.parse(localStorage.getItem('products'))

let basis = document.getElementsByClassName('container')[0]
//יצירת הHTML

for (let index = 0; index < 16; index++) {
    console.log(pruducts[index]);

    let div = document.createElement('div')
    div.className = "product"
    let img = document.createElement('img')
    let srcc = pruducts[index].pic
    img.src = srcc
    console.log(img.src);
    let div2 = document.createElement('div')
    div2.className = "product-overlay"
    let p = document.createElement('p')
    let pp = pruducts[index].description
    p.innerText = pp
    let productName = document.createElement('h4')
    productName.innerText = pruducts[index].title
    let buttonn = document.createElement('button')
    buttonn.className = "buy-button"
    buttonn.innerText = "לרכישה"
    buttonn.setAttribute('data-who', pruducts[index].title);
    console.log(buttonn.getAttribute('data-who'));
    buttonn.addEventListener('click', BuyingProduct)
    div.appendChild(productName)
    div.appendChild(img);
    div.appendChild(div2);
    div.appendChild(buttonn)
    div2.appendChild(p)
    basis.appendChild(div)
}

function BuyingProduct() {
    let who = event.currentTarget.getAttribute('data-who')
    console.log(who);
    for (let index = 0; index < pruducts.length; index++) {
        if (pruducts[index].title == who)
            sessionStorage.setItem('who', JSON.stringify(pruducts[index]))
    }

    window.location.href = "../html/ProductDetails.html"

}