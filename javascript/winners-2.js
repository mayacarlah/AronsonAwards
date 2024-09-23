document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    function openAccordion(year) {
        accordionItems.forEach(function(item) {
            item.classList.remove('active');
        });

        const panelToOpen = document.getElementById(year);
        if (panelToOpen) {
            panelToOpen.classList.add('active');
        }
    }

    function toggleAccordion(panelId) {
        const panelToToggle = document.getElementById(panelId);
        if (panelToToggle) {
            panelToToggle.classList.toggle('active');
        }
    }

    accordionItems.forEach(function(item) {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', function() {
            const panelId = item.id;
            toggleAccordion(panelId);
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const selectedYear = urlParams.get('year');
    if (selectedYear) {
        openAccordion(selectedYear);
    }

    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });
});

// document.getElementById("accordian").style.height = document.getElementById("body-card").style.height 

