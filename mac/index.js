let grey = document.querySelector('.gr')
let white = document.querySelector('.wh')
let macbook = document.querySelector('.macbook')
let tb1 = document.querySelector('.tb1')
let tb2 = document.querySelector('.tb2')
let tb4 = document.querySelector('.tb4')
let price = document.querySelector('.price')
let tb0 = document.querySelector('.m512')
let wh1 = document.querySelector('.wh1')

grey.onclick = () =>{
    macbook.setAttribute('src', './assets/png/silver.png')
    white.style.background = '#CFE7FF';
    white.style.color = '#797979';
    grey.style.background = '#0071E3';
    grey.style.color = '#fff';
    wh1.innerHTML = 'Space Grey';

}
white.onclick = () => {
    macbook.setAttribute('src', './assets/png/space-grey.png')
    white.style.background = '#0071E3';
    white.style.color = '#fff';
    grey.style.background = '#CFE7FF';
    grey.style.color = '#797979';
    wh1.innerHTML = 'White';
}

tb1.onclick = () => {
    price.innerHTML = '$2,199';
    tb0.style.border = '2px solid #CFE7FF';
    tb1.style.border = '2px solid #007FFF';
    tb2.style.border = '2px solid #CFE7FF';
    tb4.style.border = '2px solid #CFE7FF';
}
tb0.onclick = () => {
    price.innerHTML = '$1,999';
    tb0.style.border = '2px solid #007FFF';
    tb1.style.border = '2px solid #CFE7FF';
}
tb2.onclick = () => {
    price.innerHTML = '$2,599';
    tb0.style.border = '2px solid #CFE7FF';
    tb1.style.border = '2px solid #CFE7FF';
    tb4.style.border = '2px solid #CFE7FF';
    tb2.style.border = '2px solid #007FFF';
}
tb4.onclick = () => {
    price.innerHTML = '$3,199';
    tb0.style.border = '2px solid #CFE7FF';
    tb1.style.border = '2px solid #CFE7FF';
    tb2.style.border = '2px solid #CFE7FF';
    tb4.style.border = '2px solid #007FFF';
}