// File: typewriter.js
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    const typewriter = document.getElementById('typewriter');
    if (typewriter) {
        const text = typewriter.textContent;
        typewriter.textContent = ''; // Clear initial text

        let index = 0;
        function type() {
            if (index < text.length) {
                typewriter.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust typing speed here
            }
        }

        type();
    }
});
