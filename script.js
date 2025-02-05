document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            sections.forEach(section => {
                if (section.getAttribute("id") === targetId) {
                    section.classList.add("visible");
                    section.classList.remove("hidden");
                } else {
                    section.classList.add("hidden");
                    section.classList.remove("visible");
                }
            });
        });
    });
});
