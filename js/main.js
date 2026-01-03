/* --- Mobile Menu Logic (Global) --- */
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents clicks from bubbling up
            mobileMenu.classList.toggle("hidden");
        });

        // Optional: Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add("hidden");
            }
        });
    }
});