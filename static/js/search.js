const btnTop = document.getElementById("btnTop");

window.addEventListener(
    "scroll",
    () => {
        if (window.scrollY > 100) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    },
    { passive: true },
);
