const showSearch = document.querySelectorAll(".search");

showSearch[0].addEventListener("click", () => {
  const showInput = document.querySelector(".search-input");
  showInput.classList.toggle("hidden");
  if (showInput.classList.contains("hidden")) {
    showSearch[0].innerHTML = "search";
  } else {
    showSearch[0].innerHTML = "close";
  }
});

// MOBILE
const closeMenu = document.querySelector(".close");
const Aside = document.querySelector(".mobile-aside");
const showMenu = document.querySelector(".menu");

showSearch[1].addEventListener("click", () => {
  const showInputMobile = document.querySelector(".search-input-mobile");

  showInputMobile.classList.toggle("hide");
  if (showInputMobile.classList.contains("hide")) {
    showSearch[1].innerHTML = "search";
  } else {
    showSearch[1].innerHTML = "close";
  }
});
showMenu.addEventListener("click", () => {
  Aside.classList.remove("hide");
});
closeMenu.addEventListener("click", () => {
  Aside.classList.add("hide");
});
