document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for nav links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dark Mode Toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.border = "none";
    toggleButton.style.background = "#444";
    toggleButton.style.color = "white";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.borderRadius = "5px";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 0, 0.9)";
        } else {
            navbar.style.background = "rgba(0, 0, 0, 0.8)";
        }
    });

    // Hamburger Menu for Mobile
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Bubble Background Animation
    const background = document.querySelector(".animated-background");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        bubble.style.width = Math.random() * 20 + 10 + "px"; // Random size
        bubble.style.height = bubble.style.width; // Keep it circular
        bubble.style.animationDuration = Math.random() * 5 + 3 + "s"; // Random speed
        background.appendChild(bubble);

        // Remove bubble after animation ends
        bubble.addEventListener("animationend", () => {
            bubble.remove();
        });
    }

    // Generate bubbles at regular intervals
    setInterval(createBubble, 300);
});
