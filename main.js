const nav = document.querySelector("#navcontainer");
const backTop = document.getElementById("top-btn");
// console.log(backTop);

window.addEventListener("scroll", () => {
  nav.classList.toggle("windowScroll", window.scrollY > 50);
  if (scrollY > 1000) {
    backTop.style.display = "block";
    // backTop.addEventListener("click", () => {
    //   window.scrollY = 0;
    // });
  } else {
    backTop.style.display = "none";
  }
});

const faqs = document.querySelectorAll(".faq");
// console.log(faqs);

for (let faq of faqs) {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    const icon = faq.querySelector(".toggle__btn i");
    // console.log(plus);

    if (icon.className == "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
}

// ======= About Page ==============

const members = document.querySelectorAll(".member__card");
// console.log(members);

for (let member of members) {
  member.addEventListener("mouseover", () => {
    const socials = member.querySelector(".member__socials");
    const img = member.querySelector("img");
    socials.classList.toggle("socials");
    img.classList.toggle("img_hover");
  });
}
for (let member of members) {
  member.addEventListener("mouseout", () => {
    const socials = member.querySelector(".member__socials");
    const img = member.querySelector("img");
    socials.classList.toggle("socials");
    img.classList.toggle("img_hover");
  });
}

// for (let faq of faqs) {
//   faq.addEventListener("mouseover", () => {
//     faq.classList.toggle("open");
//   });
// }
// for (let faq of faqs) {
//   faq.addEventListener("mouseout", () => {
//     faq.classList.toggle("open");
//   });
// }

// ========================== Swiper Js ===================================

// const swiper = new Swiper(".swiper", {
//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   slidesPerView: 3,
//   spaceBetween: 30,
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   direction: "horizontal",
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     // clickable: true,
//     type: "bullets",
//   },
// });
try {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 50,

    breakpoints: {
      // when window width is >= 320px
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      2560: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      // when window width is >= 480px
      // 480: {
      //   slidesPerView: 3,
      //   spaceBetween: 30,
      // },
      // // when window width is >= 640px
      // 640: {
      //   slidesPerView: 4,
      //   spaceBetween: 40,
      // },
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
} catch (error) {
  console.log(error);
}
// swiper.init();
// swiper.nextEl();

// ========== MEDIA QUERIES ===========

const nav_toggle_open = document.getElementById("open-btn");
const nav_toggle_close = document.getElementById("close-btn");
const nav_menu = document.getElementById("nav__menu");
// const
console.log(nav_toggle_open);

nav_toggle_open.addEventListener("click", () => {
  nav_toggle_open.style.display = "none";
  nav_toggle_close.style.display = "block";
  nav_menu.style.display = "block";
});

nav_toggle_close.addEventListener("click", () => {
  nav_toggle_close.style.display = "none";
  nav_toggle_open.style.display = "block";
  nav_menu.style.display = "none";
});
