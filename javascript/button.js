var popup = document.getElementById("popup");
var button = document.getElementById("openButton");
var closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, open the modal
button.addEventListener('click', () => {
    popup.showModal();
}); 

closeBtn.addEventListener('click', () => {
  popup.close();
});


// // When the user clicks on (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }