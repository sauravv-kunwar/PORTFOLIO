document.addEventListener("DOMContentLoaded", () => {
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

    // Project Hover Effect
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseover", () => {
            project.style.transform = "scale(1.05)";
            project.style.transition = "0.3s";
        });
        project.addEventListener("mouseleave", () => {
            project.style.transform = "scale(1)";
        });
    });

    // Interactive Background Effect
    const background = document.querySelector(".animated-background");
    for (let i = 0; i < 50; i++) {
        let bubble = document.createElement("span");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = Math.random() * 5 + 3 + "s";
        background.appendChild(bubble);
    }
});
