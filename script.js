// ================================
// ABHISHEK DIGITAL SOLUTIONS
// MAIN JAVASCRIPT
// ================================

// ---------- MOBILE MENU ----------
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// ---------- CLOSE MOBILE MENU ----------
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("show");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// ---------- ACTIVE NAVIGATION ----------
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ---------- HEADER SHADOW ON SCROLL ----------
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.10)";
    } else {
        header.style.boxShadow =
            "0 3px 20px rgba(0, 0, 0, 0.06)";
    }

});


// ---------- SCROLL REVEAL ANIMATION ----------
const revealElements = document.querySelectorAll(
    ".service-box, .about-card, .about-content, .section-heading"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });

};


// Set initial animation state
revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});

window.addEventListener("scroll", revealOnScroll);


// Run once when page opens
window.addEventListener("load", revealOnScroll);





// ================================
// CONTACT FORM → WHATSAPP
// ================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !phone || !service || !message) {
        alert("Please fill all the required details.");
        return;
    }

    // YOUR WHATSAPP NUMBER
    // Example: India number = 91 + mobile number
    const whatsappNumber = "917800097612";

    // Create WhatsApp message
    const whatsappMessage =
        "Hello Abhishek Digital Solutions!%0A%0A" +
        "*New Project Inquiry*%0A%0A" +
        "*Name:* " + encodeURIComponent(name) + "%0A" +
        "*Phone:* " + encodeURIComponent(phone) + "%0A" +
        "*Service Required:* " + encodeURIComponent(service) + "%0A" +
        "*Project Details:* " + encodeURIComponent(message);

    // Open WhatsApp
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;

    window.open(whatsappURL, "_blank");

    // Clear form
    contactForm.reset();
});