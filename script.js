document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            sections.forEach(section => {
                section.classList.remove("visible");
                section.classList.add("hidden");
            });
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("visible");
                targetSection.classList.remove("hidden");
            }
        });
    });

    // Make the first section visible by default
    if (sections.length > 0) {
        sections[0].classList.add("visible");
        sections[0].classList.remove("hidden");
    }
});
