document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove("visible");
            section.classList.add("hidden");
        });

        navLinks.forEach(link => link.classList.remove("active"));

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("visible");
            targetSection.classList.remove("hidden");
        }

        const activeLink = document.querySelector(`nav a[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            showSection(targetId);
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        showSection(sections[0].id);
    }
});
