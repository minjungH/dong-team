document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".box02 .best-list.gsap-slide");
  if (!container) return;

  const cards = Array.from(container.querySelectorAll("li"));
  const prevBtn = document.querySelector(".box02 .slide-arrow.prev");
  const nextBtn = document.querySelector(".box02 .slide-arrow.next");

  let current = 0;
  let cardWidth = 370; // 카드(350px) + gap(20px) = 370px

  function getVisibleCount() {
    return Math.max(
      1,
      Math.floor(container.parentElement.offsetWidth / cardWidth)
    );
  }

  let visibleCount = getVisibleCount();

  function update() {
    let x = -current * cardWidth;
    gsap.to(container, { x, duration: 0.45, ease: "power2.out" });
  }

  nextBtn?.addEventListener("click", () => {
    current = Math.min(current + 1, cards.length - visibleCount);
    update();
  });

  prevBtn?.addEventListener("click", () => {
    current = Math.max(current - 1, 0);
    update();
  });

  let draggable = Draggable.create(container, {
    type: "x",
    edgeResistance: 0.82,
    bounds: {
      minX: -(cardWidth * (cards.length - visibleCount)),
      maxX: 0,
    },
    inertia: true,
    onDragEnd: function () {
      let idx = Math.round(-this.x / cardWidth);
      current = Math.max(0, Math.min(idx, cards.length - visibleCount));
      update();
    },
  })[0];

  window.addEventListener("resize", () => {
    // 만약 카드사이즈/gap이 미디어쿼리로 바뀌면 여기도 값 바꿔주기!
    visibleCount = getVisibleCount();
    current = Math.max(0, Math.min(current, cards.length - visibleCount));
    draggable.applyBounds({
      minX: -(cardWidth * (cards.length - visibleCount)),
      maxX: 0,
    });
    update();
  });

  update();
});
