document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".btn-where .arrow");
  const submenu = document.querySelector(".btn-where .submenu");
  arrow.addEventListener("click", function () {
    submenu.classList.toggle("show");
  });
});
