const selectElement = (s) => document.querySelector(s);

selectElement(".burger-menu").addEventListener("click", () => {
    selectElement(".nav-links").classList.toggle("active");
    selectElement(".burger-menu").classList.toggle("burger-rotate");
});
