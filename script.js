// Get the modals
const aboutPopup = document.getElementById("aboutPopup");
const resumePopup = document.getElementById("resumePopup");

// Get the clickable text that opens the modals
const aboutText = document.getElementById("aboutText");
const resumeText = document.getElementById("resumeText");

// Get the <span> element that closes the modals
const closeSpans = document.getElementsByClassName("close");

// When the user clicks the About text, open the About modal
aboutText.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    aboutPopup.style.display = "block"; // Show the About pop-up
}

// When the user clicks the Resume text, open the Resume modal
resumeText.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    resumePopup.style.display = "block"; // Show the Resume pop-up
}

// Function to close the modals
function closeModal() {
    aboutPopup.style.display = "none"; // Hide the About pop-up
    resumePopup.style.display = "none"; // Hide the Resume pop-up
}

// Close modals when the user clicks on <span> (x)
for (let span of closeSpans) {
    span.onclick = closeModal;
}

// Close modals when the user clicks anywhere outside the modal
window.onclick = function(event) {
    if (event.target === aboutPopup) {
        aboutPopup.style.display = "none"; // Close the About modal
    }
    if (event.target === resumePopup) {
        resumePopup.style.display = "none"; // Close the Resume modal
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Get all work items
    var workItems = document.querySelectorAll(".work-item");
    
    // Get all popups
    var popups = document.querySelectorAll(".popup");

    // Loop through work items to add click event
    workItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var popupId = this.getAttribute("data-popup"); // Get popup ID from data attribute
            var popup = document.getElementById(popupId); // Find the corresponding popup
            popup.style.display = "flex"; // Show the popup
        });
    });

    // Close the popup when the 'close' button is clicked
    var closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var popup = this.closest(".popup");
            popup.style.display = "none"; // Hide the popup
        });
    });

    // Close the popup if the user clicks outside the content
    popups.forEach(function(popup) {
        popup.addEventListener("click", function(event) {
            if (event.target === popup) {
                popup.style.display = "none"; // Hide the popup
            }
        });
    });
});
