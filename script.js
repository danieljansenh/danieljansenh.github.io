// Get the modal
const popup = document.getElementById("popup");

// Get the clickable text that opens the modal
const aboutText = document.getElementById("aboutText");

// Get the <span> element that closes the modal
const closeSpan = document.getElementsByClassName("close")[0];

// When the user clicks the text, open the modal
aboutText.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    popup.style.display = "block"; // Show the pop-up
}

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function() {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
