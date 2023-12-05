// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    displayStickyMenu()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function displayStickyMenu() {
    if (window.pageYOffset >= 20) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}