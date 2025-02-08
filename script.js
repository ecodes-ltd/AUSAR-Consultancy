document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = "none";
        });
    }

    function showSection(sectionId) {
        hideAllSections();
        document.getElementById(sectionId).style.display = "block";
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = this.getAttribute("href").substring(1);
            showSection(targetSection);
        });
    });

    // Initialize - Show the first section by default
    if (sections.length > 0) {
        showSection(sections[0].id);
    }
});
