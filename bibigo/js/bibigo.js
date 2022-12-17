window.onload = function () {
  let search = document.querySelector("#SCBtn");
  let searchBar = document.querySelector("#searchBar");
  let close = document.querySelector("#close");
  search.addEventListener("click", function () {
    searchBar.style.display = "block";
  });
  close.addEventListener("click", function () {
    searchBar.style.display = "none";
  });
  scrollItem.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};
AOS.init();

$(".slider").slick({
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
});

// scroll
let scrollItem = document.querySelector(".scrollUp");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    scrollItem.classList.add("on");
    scrollItem.innerHTML = '<i class="xi-arrow-up"></i>';
  } else {
    scrollItem.classList.remove("on");
    scrollItem.innerHTML = 'SCROLL DOWN<i class="xi-angle-down-min"></i>';
  }
  console.log(scrollItem.className);
});

// rpMenu
let MbMenu = document.querySelector(".MbMenu");
let rpMenu = document.querySelector(".rpMenu");
let rpClose = document.querySelector("#rpClose");
let SCBtn = document.querySelector("#SCBtn");
MbMenu.addEventListener("click", function () {
  rpMenu.style.display = "block";
  MbMenu.style.display = "none";
  SCBtn.style.display = "none";
  rpClose.style.display = "block";
});
rpClose.addEventListener("click", function () {
  rpMenu.style.display = "none";
  MbMenu.style.display = "block";
  SCBtn.style.display = "block";
  rpClose.style.display = "none";
});

$(function () {
  $(".gnb>.submenu>li>a").on("click", function (e) {
    if ($(".gnb").hasClass("on")) {
      e.preventDefault();
      $(".submenu").slideUp();
      $(this).next().stop().slideToggle();
    }
  });
});
