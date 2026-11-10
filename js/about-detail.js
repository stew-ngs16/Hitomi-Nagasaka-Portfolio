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


  const aboutProfile = document.querySelector(".about-profile");

if (aboutProfile) {
  const profileObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-profile-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  profileObserver.observe(aboutProfile);
}


const skillsTitle = document.querySelector(".js-skills-title");

if (skillsTitle) {
  const skillsTitleObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-skills-title-visible");
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.3,
    }
  );

  skillsTitleObserver.observe(skillsTitle);
}

const strengthsTitle = document.querySelector(".js-strengths-title");

if (strengthsTitle) {
  const strengthsTitleObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-strengths-title-visible");
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.3,
    }
  );

  strengthsTitleObserver.observe(strengthsTitle);
}


const fadeUpItems = document.querySelectorAll(".js-fade-up");

if (fadeUpItems.length > 0) {
  const fadeUpObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-fade-up-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  fadeUpItems.forEach((item) => {
    fadeUpObserver.observe(item);
  });
}
}