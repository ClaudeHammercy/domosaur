//Warmup
const changeToFortyPixels = document.querySelector('.mess-with-me');
changeToFortyPixels.style.fontSize = '40px';

const backgroundToGreen = document.querySelector('.mess-with-me');
backgroundToGreen.style.backgroundColor = 'green';

const hiddenDino = document.querySelector('#hide-me');
hiddenDino.style.display = 'none';

const biggerDino = document.querySelector('#triceratops');
biggerDino.style.width = '324px';


//1
const fontToOrange = document.querySelector('.mess-with-me');
console.log(fontToOrange);
fontToOrange.addEventListener('click', function () {
    fontToOrange.style.color = 'orange';
});

//2
const firstDino = document.querySelector('#triceratops');
firstDino.addEventListener('click', function () {
    firstDino.style.border = 'solid 2px red';
});

//3
const featheredDino = document.querySelector('#feathers');
featheredDino.addEventListener('click', function () {
    featheredDino.style.opacity = '0.5';
});

//4
const rowToSwitch = document.querySelector('#row');
const swithBackgroundColor = document.querySelector('#toggle');
swithBackgroundColor.addEventListener('click', function () {
    rowToSwitch.style.backgroundColor = 'purple';
});

//5
const growsImage = document.querySelector('#biggify');
growsImage.addEventListener('mouseover', function () {
    growsImage.style.width = '200px'
})