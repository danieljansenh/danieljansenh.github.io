// Get the modals
const aboutPopup = document.getElementById("aboutPopup");
const contactPopup = document.getElementById("contactPopup");

// Get the clickable text that opens the modals
const aboutText = document.getElementById("aboutText");
const contactText = document.getElementById("contactText");

// Get the <span> element that closes the modals
const closeSpans = document.getElementsByClassName("close");

// When the user clicks the About text, open the About modal
aboutText.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    aboutPopup.style.display = "block"; // Show the About pop-up
}

// When the user clicks the Contact text, open the Contact modal
contactText.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    contactPopup.style.display = "block"; // Show the Contact pop-up
}

// Function to close the modals
function closeModal() {
    aboutPopup.style.display = "none"; // Hide the About pop-up
    contactPopup.style.display = "none"; // Hide the Contact pop-up
}

// Close modals when the user clicks on <span> (x)
for (let span of closeSpans) {
    span.onclick = closeModal;
}

// Close modals when the user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target === aboutPopup) {
        aboutPopup.style.display = "none";
    }
    if (event.target === contactPopup) {
        contactPopup.style.display = "none";
    }
}
