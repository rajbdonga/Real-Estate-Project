// Helper function used throughout the code for adding events
const addEventOnElement = function(element, type, listener) {
    if(element.length > 1) {
        for(let i = 0; i < element.length; i++) {            
            element[i].addEventListener(type, listener);
        }
    } else {
        element.addEventListener(type, listener);
    }
}

//============ NAVBAR ===============//
// Selects elements with these data attributes from index.html navigation section
const navbar = document.querySelector("[data-navbar]");           // Used in <nav class="navbar" data-navbar>
const navLinks = document.querySelector("[data-nav-link]");      // Used in <a class="navbar-link" data-nav-link>
const navToggler = document.querySelector("[data-nav-toggler]"); // Used in <button class="nav-toggle-btn" data-nav-toggler>

// Toggle menu for mobile navigation
const toggleNav = function() {
    navbar.classList.toggle("active");    // Controls mobile menu visibility
    this.classList.toggle("active");      // Changes hamburger icon to close icon
}

addEventOnElement(navToggler, "click", toggleNav); // Activates when clicking hamburger menu

// Close mobile menu
const closeNav = function() {
    navbar.classList.remove("active");    // Hides mobile menu
    navToggler.classList.remove("active") // Returns to hamburger icon
}

addEventOnElement(navLinks, "click", closeNav); // Closes menu when clicking a nav link

//============ HEADER & BACK TO TOP ===============//
// Selects header and back-to-top button elements
const header = document.querySelector("[data-header]");           // Used in <header class="header" data-header>
const backTopBtn = document.querySelector("[data-back-top-btn]"); // Used in <a class="back-top-btn" data-back-top-btn>

// Window scroll event handler
window.addEventListener("scroll", function() {
    if(window.scrollY >= 50) {
        header.classList.add("active");    // Adds shadow to header when scrolled
        backTopBtn.classList.add("active") // Shows back-to-top button when scrolled
    } else {
        header.classList.remove("active");    // Removes header shadow at top
        backTopBtn.classList.remove("active") // Hides back-to-top button at top
    }
});
