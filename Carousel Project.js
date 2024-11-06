const mainImage = document.getElementById('main-img');
const louis = document.getElementById('louis');
const img = document.getElementById('img');
const vuitton = document.getElementById('vuitton');
const shoes = document.getElementById('shoes');
const minus = document.getElementById('minus');
const input = document.querySelector('.input');
const plus = document.getElementById('plus');
const cartBtn = document.querySelector('button');
const cart = document.getElementById('cart');


louis.addEventListener('click', () => {
    mainImage.src = "louis shoes.jpg"
})

img.addEventListener('click', () => {
    mainImage.src = "Luxury Sneakers.webp"
})

vuitton.addEventListener('click', () => {
    mainImage.src = "vuitton shoes.jpg"
})

shoes.addEventListener('click', () => {
    mainImage.src = "Shoes.jpg"
})


minus.addEventListener('click', () => {

    if (input.value == '0') {
        input.value = "0"
    }else {
         input.value--
    }
})
plus.addEventListener('click', () => {
    input.value++
})

cartBtn.addEventListener('click', () => {
    cart.innerText = input.value;
    cart.style.display = "inline-block"
})

