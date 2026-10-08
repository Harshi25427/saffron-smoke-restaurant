// VELORA - Home Page JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Page loaded message
    console.log("VELORA website loaded successfully!");

    // Explore button animation
    const buttons = document.querySelectorAll(".primary-btn, .outline-btn");

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {
            button.style.transform = "translateY(-3px)";
        });

        button.addEventListener("mouseleave", function () {
            button.style.transform = "translateY(0)";
        });

    });

});