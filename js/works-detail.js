"use strict;" 
{
  document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".js-section-title");

  if (!titles.length) return;

  const titleObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-title-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  titles.forEach((title) => {
    titleObserver.observe(title);
  });
});


const contact = document.querySelector("#contact");

if (contact) {
  const contactObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-contact-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  contactObserver.observe(contact);
}


 let nav = document.querySelector("#navArea");
  let btn = document.querySelector(".toggle-btn");
  let mask = document.querySelector("#mask");
  let navLinks = document.querySelectorAll("#navArea a");

  btn.onclick = () => {
    nav.classList.toggle("open");
  };

  mask.onclick = () => {
    nav.classList.remove("open");
  };

  navLinks.forEach((link) => {
    link.onclick = () => {
      nav.classList.remove("open");
    };
  });
}