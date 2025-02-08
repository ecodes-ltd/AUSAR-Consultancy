// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let loader = document.getElementById("loader");
        loader.classList.add("hidden");

        // Wait for the transition, then remove it completely
        setTimeout(() => {
            loader.classList.add("removed");
        }, 500);
    }, 10000); // 10 seconds
});

// Mobile Menu Toggle
const menuToggle = document.createElement("div");
menuToggle.innerHTML = "☰";
menuToggle.style.cursor = "pointer";
menuToggle.style.fontSize = "24px";
menuToggle.style.padding = "10px";
menuToggle.style.color = "white";
menuToggle.style.position = "absolute";
menuToggle.style.top = "10px";
menuToggle.style.right = "20px";
menuToggle.style.display = "none";

const nav = document.querySelector("nav ul");
document.querySelector("nav").appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
        menuToggle.style.display = "none";
    } else {
        menuToggle.style.display = "block";
    }
});

// Ensure menu is responsive on load
window.dispatchEvent(new Event("resize"));
