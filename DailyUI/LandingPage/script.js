document.addEventListener("DOMContentLoaded", function() {
    const toggleMobile = document.querySelector(".toggle-mobile");
    const mobileMenuContent = document.querySelector(".mobile-menu-content");

    toggleMobile.addEventListener("click", function() {
        mobileMenuContent.classList.toggle("show");
    });
});