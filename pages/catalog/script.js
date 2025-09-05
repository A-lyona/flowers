const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
let body = document.querySelector('body');

function styleOffName() {
    one.classList.remove('cho');
    two.classList.remove('cho');
    three.classList.remove('cho');
    four.classList.remove('cho');
    five.classList.remove('cho');
    six.classList.remove('cho');
    seven.classList.remove('cho');
}

one.addEventListener('click', function() {
styleOffName();
    one.classList.add('cho');
    body.style.backgroundImage = 'url("assets/79065.jpg")';
    gameWinN.style.backgroundImage = 'url("assets/79065.jpg")';
    gameWinX.style.backgroundImage = 'url("assets/79065.jpg")';
    gameWinO.style.backgroundImage = 'url("assets/79065.jpg")';
});

two.addEventListener('click', function() {
  styleOffName();
  two.classList.add('cho');
  body.style.backgroundImage = 'url("assets/93376.jpg")';
  gameWinN.style.backgroundImage = 'url("assets/93376.jpg")';
  gameWinX.style.backgroundImage = 'url("assets/93376.jpg")';
  gameWinO.style.backgroundImage = 'url("assets/93376.jpg")';
});

three.addEventListener('click', function() {
  styleOffName();
  three.classList.add('cho');
  body.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinN.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinX.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinO.style.backgroundImage = 'url("assets/53622112.jpg")';
});

four.addEventListener('click', function() {
  styleOffName();
  four.classList.add('cho');
  body.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinN.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinX.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinO.style.backgroundImage = 'url("assets/53622112.jpg")';
});

five.addEventListener('click', function() {
  styleOffName();
  five.classList.add('cho');
  body.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinN.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinX.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinO.style.backgroundImage = 'url("assets/53622112.jpg")';
});

six.addEventListener('click', function() {
  styleOffName();
  six.classList.add('cho');
  body.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinN.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinX.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinO.style.backgroundImage = 'url("assets/53622112.jpg")';
});

seven.addEventListener('click', function() {
  styleOffName();
  seven.classList.add('cho');
  body.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinN.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinX.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinO.style.backgroundImage = 'url("assets/53622112.jpg")';
});