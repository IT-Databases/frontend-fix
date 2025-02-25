/* ==================== CHANGE NAV HEADER ===================== */
function scrollNavHeader() {
  const nav = document.getElementById("nav");

  if (this.scrollY >= 50) {
    nav.classList.add("w-full", "mt-0", "rounded-none", "xl:px-12");
    nav.classList.remove("w-[92vw]", "mt-4", "rounded-lg", "xl:px-4");
  } else {
    nav.classList.add("w-[92vw]", "mt-4", "rounded-lg", "xl:px-4");
    nav.classList.remove("w-full", "mt-0", "rounded-none", "xl:px-12");
  }
}

window.addEventListener("scroll", scrollNavHeader);

/* ==================== SHOW SCROLL UP ===================== */
function showScroll() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 350) {
    scrollUp.classList.add("bottom-8");
    scrollUp.classList.remove("-bottom-20");
  } else {
    scrollUp.classList.remove("bottom-8");
    scrollUp.classList.add("-bottom-20");
  }
}

window.addEventListener("scroll", showScroll);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 38,
      sectionId = section.getAttribute("id"),
      sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("bg-orange-lemon", "text-white");
    } else {
      sectionClass.classList.remove("bg-orange-lemon", "text-white");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/* ==================== SWIPER TOPICS  ===================== */
const swiperTopics = new Swiper(".swiper-topics", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/* ==================== SCROLL REVEAL ANIMATION ===================== */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true,
});

sr.reveal(
  ".home__img, .fee__title, .date__title, .date__line, .theme__title, .speech__title, .speaker__title, .committee__title, .venue__title"
);
sr.reveal(".submission__img, .theme__desc, .keynote__text, .veneu__text", {
  delay: 600,
});
sr.reveal(".home__p", { delay: 700 });
sr.reveal(".footer__copy", { delay: 1500, origin: "bottom" });
sr.reveal(
  ".fee__card, .date__date, .speaker__card, .committee__list, .contact,",
  {
    interval: 300,
  }
);
sr.reveal(
  ".home__title, .about, .date__img, .submission__title, .submission__img, .speech__left, .keynote__img,.keynote__text, .veneu__text",
  {
    origin: "left",
  }
);
sr.reveal(".about__img, .submission__text, .speech__right, .veneu__map", {
  origin: "right",
});

/* ==================== HAMBURGER MENU ===================== */
const navToggle = document.getElementById("nav-toggle"),
  navMenu = document.getElementById("nav-menu"),
  navLinks = document.querySelectorAll(".nav__menu a");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    ["scale-0", "opacity-0"].map((e) => navMenu.classList.toggle(e));
  });

  navLinks.forEach((nL) =>
    nL.addEventListener("click", () => {
      ["scale-0", "opacity-0"].map((e) => navMenu.classList.toggle(e));
    })
  );
}

// Data
const dataMixedChartExample = {
  type: 'bar',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '],
    datasets: [
      // First dataset (bar)
      {
        label: 'Impressions',
        data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
        order: 2,
      },
      // Second dataset (line)
      {
        label: 'Impressions (absolute top) %',
        data: [211, 2543, 2745, 3123, 2765, 1485, 587],
        type: 'line',
        order: 1,
        backgroundColor: 'rgba(66, 133, 244, 0.0)',
        borderColor: '#94DFD7',
        borderWidth: 2,
        pointBorderColor: '#94DFD7',
        pointBackgroundColor: '#94DFD7',
        lineTension: 0.0,
      },
    ],
  },
};

new te.Chart(document.getElementById('chart-mixed-example'), dataMixedChartExample);