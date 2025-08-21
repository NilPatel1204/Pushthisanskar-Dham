// * Scroll to top
document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollBtn.classList.remove(
                "opacity-0",
                "translate-y-4",
                "pointer-events-none"
            );
            scrollBtn.classList.add(
                "opacity-100",
                "translate-y-0",
                "pointer-events-auto"
            );
        } else {
            scrollBtn.classList.remove(
                "opacity-100",
                "translate-y-0",
                "pointer-events-auto"
            );
            scrollBtn.classList.add(
                "opacity-0",
                "translate-y-4",
                "pointer-events-none"
            );
        }
    });

    scrollBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});