// Get the modal
var modal_iros2022 = document.getElementById("bibtex__modal--iros2022");

// Get the button that opens the modal
var btn_iros2022 = document.getElementById("bibtex--iros2022");

// Get the <span> element that closes the modal
var span_iros2022 = document.getElementById("modal__close--iros2022");

// When the user clicks on the button, open the modal
btn_iros2022.onclick = function() {
  modal_iros2022.style.display = "block";
}

// When the user clicks anywhere outside of the modal_iros2022, close it
window.onclick = function(event) {
  if (event.target == modal_iros2022) {
    modal_iros2022.style.display = "none";
  }
} 
// When the user clicks on <span> (x), close the modal_iros2022
span_iros2022.onclick = function() {
  modal_iros2022.style.display = "none";
}

