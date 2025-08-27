// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Favorite Buttons (localStorage)
document.querySelectorAll(".favorite-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
      btn.textContent = "💖 Favorited";
    } else {
      btn.textContent = "❤️ Favorite";
    }
  });
});

// Newsletter Form
const form = document.getElementById("newsletterForm");
const msg = document.getElementById("newsletterMsg");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      msg.textContent = "Please enter a valid email.";
      msg.style.color = "yellow";
    } else {
      msg.textContent = "Thanks for subscribing!";
      msg.style.color = "lime";
      form.reset();
    }
  });
}

// ===== Mobile Navigation Toggle =====
const mobileMenuToggle = document.querySelector(".menu-toggle");
const mobileNavLinks = document.querySelector(".nav-links");

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    mobileNavLinks.classList.toggle("show");
  });
}

// ===== Read More / Read Less Toggle in Mission Section =====
const missionText = document.querySelector(".mission p");
if (missionText && missionText.textContent.length > 150) {
  const fullText = missionText.textContent;
  const shortText = fullText.substring(0, 150) + "...";

  missionText.textContent = shortText;

  const btn = document.createElement("button");
  btn.textContent = "Read More";
  btn.classList.add("read-more-btn");
  missionText.insertAdjacentElement("afterend", btn);

  let expanded = false;
  btn.addEventListener("click", () => {
    missionText.textContent = expanded ? shortText : fullText;
    btn.textContent = expanded ? "Read More" : "Read Less";
    expanded = !expanded;
  });
}

// ===== Team Member Hover Bio =====
const teamMembers = document.querySelectorAll(".team-member");

teamMembers.forEach((member) => {
  member.addEventListener("mouseenter", () => {
    member.classList.add("hovered");
  });
  member.addEventListener("mouseleave", () => {
    member.classList.remove("hovered");
  });
});

// ===== Scroll Animation for Team Section =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".team-member").forEach((el) => observer.observe(el));

// ===== Team Modal =====
const teamModal = document.getElementById("teamModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalBio = document.getElementById("modalBio");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".team-member").forEach(member => {
  member.addEventListener("click", () => {
    modalImage.src = member.querySelector("img").src;
    modalName.textContent = member.dataset.name;
    modalRole.textContent = member.dataset.role;
    modalBio.textContent = member.dataset.bio;

    teamModal.style.display = "flex";
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    teamModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === teamModal) {
    teamModal.style.display = "none";
  }
});

// ===== MENU FILTER =====
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCategories = document.querySelectorAll(".menu-category");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    menuCategories.forEach(section => {
      if (category === "all" || section.getAttribute("data-category") === category) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
});

// ===== Contact Page (Modal style) =====
// ===== Navigation Highlight =====
document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll("nav ul li a");

  menuItems.forEach((item) => {
    if (item.href === currentLocation) {
      item.classList.add("active");
    }
  });
});

// ===== Contact Page Handling =====
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Simple validation
      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const message = form.querySelector("#message");

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        response.innerText = "⚠️ Please fill in all fields.";
        response.style.color = "red";
        response.classList.add("show");
        return;
      }

      // Success message
      response.innerText = "✅ Thank you! Your message has been sent.";
      response.style.color = "green";
      response.classList.add("show");

      // Reset form
      form.reset();
    });
  }
});

