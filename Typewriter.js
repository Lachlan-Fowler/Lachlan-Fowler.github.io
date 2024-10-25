// File: typewriter.js
document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    const firstTypewriter = document.getElementById('typewriter1');
    const secondTypewriter = document.getElementById('typewriter2');
    
    let isFirstLineComplete = false; // Flag to indicate if the first line is complete

    function typeText(element, text, callback) {
        element.textContent = ''; // Clear initial text
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust typing speed here
            } else {
                isFirstLineComplete = true; // Set the flag to true when finished
                if (callback) {
                    callback(); // Call the callback function when typing is complete
                }
            }
        }

        type();
    }

    // Start typing the first line if it exists
    if (firstTypewriter) {
        const firstText = firstTypewriter.textContent;
        typeText(firstTypewriter, firstText, function() {
            // Start typing the second line after the first line is done
            if (secondTypewriter && isFirstLineComplete) {
                const secondText = secondTypewriter.textContent;
                setTimeout(() => {
                    typeText(secondTypewriter, secondText); // Type second line immediately after first
                }, 500); // Adjust delay as necessary (500ms for example)
            }
        });
    }
});
