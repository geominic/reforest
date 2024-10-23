//NAVBAR
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.dropdown');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// For mobile: handle dropdown toggles
dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.innerWidth <= 768) {
            dropdown.classList.toggle('active');
        }
    });
});
