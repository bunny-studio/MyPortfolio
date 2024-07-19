// Get the button - Go To Top
const topUpBtn = document.getElementById("topupBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user clicks on the navigation button, then the glow on text will appear
const UnactiveNavlink = document.querySelectorAll(".unactive");
const sections = document.querySelectorAll(".section");

// Form Send btn
const forms = document.getElementById("contact-form");

// Navigation Menu Toggle
const navBarOpen = document.getElementById("navBtn");
const navBarClose = document.getElementById("navBtnClose");
const navBar = document.getElementById("sideMenu");
const navLinks = navBar.querySelectorAll("a");

// Consolidated Scroll Function
window.onscroll = () => {
  scrollFunction();
  highlightNavLinks();
};

// Show/Hide Go To Top Button
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topUpBtn.style.bottom = "5em";
  } else {
    topUpBtn.style.bottom = "-5em";
  }
}

// Highlight Navigation Links
function highlightNavLinks() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let offsetHeight = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + offsetHeight) {
      UnactiveNavlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".unactive[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
}

// Reset Form on Load
window.onload = () => {
  forms.reset();
};

navBarOpen.addEventListener("click", () => {
  navBar.style.right = "-5%";
  navBar.style.display = "block";
  navBarOpen.style.display = "none";
  navBarClose.style.display = "block";
  document.body.classList.add("no-scroll");
});

navBarClose.addEventListener("click", () => {
  navBar.style.right = "-110%";
  navBarOpen.style.display = "block";
  navBarClose.style.display = "none";
  document.body.classList.remove("no-scroll");
  // navBar.style.display = "none";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.style.right = "-110%";
    navBarOpen.style.display = "block";
    navBarClose.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
});
