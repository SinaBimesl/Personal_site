/* ========================================
   ADDITIONAL JAVASCRIPT FOR ONE-PAGE LAYOUT
   Add these to the END of your script.js file
   ======================================== */

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Update Form Success Message to English
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
      formMessage.textContent =
        "Your message has been sent successfully! I will get back to you soon.";
      formMessage.className = "form-message success";

      contactForm.reset();

      setTimeout(() => {
        formMessage.style.display = "none";
      }, 5000);
    } else {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.className = "form-message error";
    }
  });
}
