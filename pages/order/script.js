let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");
let btn = document.getElementById("myBtn");
let modalСlose = document.getElementById("modal_close");

btn.onclick = function() {
  modal.style.display = "block";
  if(modal.style.display = "block") {
    document.querySelector('*').style.scrollbarWidth = 'none';
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

modalСlose.onclick = function() {
  modal2.style.display = "none";
}