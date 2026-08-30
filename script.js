// ========================================
// PORTFOLIO JAVASCRIPT
// ========================================

// Always start the website at the top
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});


// ========================================
// MOBILE NAVIGATION
// ========================================

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        navToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");

            navToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}


// ========================================
// FOOTER YEAR
// ========================================

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ========================================
// IMAGE LIGHTBOX
// ========================================

const lightbox = document.querySelector(".lightbox");

if (lightbox) {
    const lightboxImage = lightbox.querySelector("img");
    const lightboxTitle = lightbox.querySelector("p");
    const closeLightbox = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll(".image-button").forEach((button) => {

        button.addEventListener("click", () => {

            const image = button.dataset.lightboxImage;
            const title = button.dataset.lightboxTitle;

            if (image) {
                lightboxImage.src = image;
            }

            if (title) {
                lightboxImage.alt = title;
                lightboxTitle.textContent = title;
            }

            lightbox.showModal();
        });

    });

    if (closeLightbox) {
        closeLightbox.addEventListener("click", () => {
            lightbox.close();
        });
    }

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });
}


// ========================================
// REVEAL ANIMATIONS
// ========================================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    }
);

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});