// Get the modals
const aboutPopup = document.getElementById("aboutPopup");
// const resumePopup = document.getElementById("resumePopup");

// Get the clickable text that opens the modals
const aboutText = document.getElementById("aboutText");
// const resumeText = document.getElementById("resumeText");

// Get the <span> element that closes the modals
const closeSpans = document.getElementsByClassName("close");

// When the user clicks the About text, open the About modal
aboutText.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    aboutPopup.style.display = "block"; // Show the About pop-up
}

// When the user clicks the Contact text, open the Contact modal
resumeText.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    // resumePopup.style.display = "block"; // Show the Contact pop-up
}

// Function to close the modals
function closeModal() {
    aboutPopup.style.display = "none"; // Hide the About pop-up
    // resumePopup.style.display = "none"; // Hide the Contact pop-up
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
    // if (event.target === resumePopup) {
    //     resumePopup.style.display = "none";
    // }
}
