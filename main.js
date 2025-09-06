var typed = new Typed(".text", {
  strings: ["Frontend Developer", "UI/UX Designer", "Web Developer"],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Active menu link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Animation for timeline items
document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  // Remove animate class initially
  timelineItems.forEach((item) => {
    item.classList.remove("animate");
  });

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll animation
  function checkAnimation() {
    timelineItems.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("animate");
      }
    });
  }

  // Initial check
  checkAnimation();

  // Check on scroll
  window.addEventListener("scroll", checkAnimation);
});
// Form submission handling
const contactFormElement = document.getElementById("contactForm");
contactFormElement.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple form validation
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name && email && subject && message) {
    // Here you would typically send the form data to a server
    alert("Thank you for your message! I will get back to you soon.");
    contactFormElement.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
// Simple script to handle footer year
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.querySelector(".copyright");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace(
      "2023",
      currentYear
    );
  }
});
