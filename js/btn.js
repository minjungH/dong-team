document.addEventListener("DOMContentLoaded", function () {
  const btnWhere = document.querySelector(".btn-where");
  const whereSubmenu = document.querySelector(".btn-where .submenu");
  const whereArrow = document.querySelector(".btn-where .arrow");
  btnWhere.addEventListener("click", function () {
    whereSubmenu.classList.toggle("show");
    whereArrow.classList.toggle("rotate");
  });

  const btnFrom = document.querySelector(".btn-from");
  const fromSubmenu = document.querySelector(".btn-from .submenu");
  const fromArrow = document.querySelector(".btn-from .arrow");
  btnFrom.addEventListener("click", function () {
    fromSubmenu.classList.toggle("show");
    fromArrow.classList.toggle("rotate");
  });

  const btnWhen = document.querySelector(".btn-when");
  const whenSubmenu = document.querySelector(".btn-when .submenu");
  const whenArrow = document.querySelector(".btn-when .arrow");
  btnWhen.addEventListener("click", function () {
    whenSubmenu.classList.toggle("show");
    whenArrow.classList.toggle("rotate");
  });

  const ticket = document.querySelector(".reservation .ticket");
  if (ticket) {
    const box1 = ticket.children[0];
    const box2 = ticket.children[1];

    box1.addEventListener("click", function (e) {
      e.stopPropagation();
      box1.classList.toggle("on");
    });

    box2.addEventListener("click", function (e) {
      e.stopPropagation();
      box2.classList.toggle("on");
    });
  }
});
