// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    const pageBody = document.querySelector("body");

    // Toggle the OffCanvas-Active class on the body
    function toggleClass() {
        pageBody.classList.toggle("OffCanvas-Active");
    }
    
    // Add click event listener to the header
    document.querySelector(".Header").addEventListener("click", toggleClass);
    
    // Stops function from firing too often
    function debounce(fn, delay) {
        let timer = null;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function() {
                fn.apply(context, args);
            }, delay);
        };
    }

    // When the window is resized, remove the OffCanvas-Active class
    window.onresize = debounce(function () {
        pageBody.classList.remove("OffCanvas-Active");
    }, 250);
});