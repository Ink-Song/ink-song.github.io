var modal = document.getElementById("modalThing");
var button = document.getElementById("openButton");
var span = document.getElementById("close");

// When the user clicks the button, open the modal
button.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}