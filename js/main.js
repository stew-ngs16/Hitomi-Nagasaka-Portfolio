"use strict;" 
{
  const fadeInItem = document.querySelectorAll('.fadein');

  const fadeInObserver = new IntersectionObserver ((entries) => {
   entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('is-show');
    }
   });
      
    },{
      threshold: 0.4
    });

    fadeInItem.forEach((item) => {
    fadeInObserver.observe(item);
  });

  const fixedContact = document.querySelector(".fv-contact");
  const contactSection = document.querySelector("#contact");

  const contactObserver = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
  if (entry.isIntersecting) {
    fixedContact.classList.add("is-hide");
  } else {
    fixedContact.classList.remove("is-hide");
  }
  });
},{
  threshold: 0.2
});

  contactObserver.observe(contactSection);


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

const sectionTitles = document.querySelectorAll(".js-section-title");

const sectionTitleObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-title-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

sectionTitles.forEach((title) => {
  sectionTitleObserver.observe(title);
});

const aboutImg = document.querySelector(".js-about-img");

if (aboutImg) {
  const aboutImgObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-about-img-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  aboutImgObserver.observe(aboutImg);
}

const aboutItem = document.querySelector(".about-item");

if (aboutItem) {
  const aboutItemObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-about-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  aboutItemObserver.observe(aboutItem);
}


const skillsCards = document.querySelectorAll(".js-skills-card");

const skillsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-skills-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -60px 0px",
  }
);

skillsCards.forEach((card) => {
  skillsObserver.observe(card);
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

document.addEventListener("DOMContentLoaded", () => {
  const aboutColorSection = document.querySelector("#about");
  const aboutColorContact = document.querySelector(".fv-contact");

  if (!aboutColorSection || !aboutColorContact) return;

  const aboutColorObserver = new IntersectionObserver(
    ([entry]) => {
      aboutColorContact.classList.toggle(
        "is-about-color",
        entry.isIntersecting
      );
    },
    {
      threshold: 0.2
    }
  );

  aboutColorObserver.observe(aboutColorSection);
});

}
