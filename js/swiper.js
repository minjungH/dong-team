const progressFill = document.querySelector(".progress-fill");
const planeIcon = document.querySelector(".plane-icon");

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            // 방어 처리
            if (typeof progress !== "number" || isNaN(progress)) return;

            // 0 ~ 1 범위 제한
            const safeProgress = Math.min(Math.max(progress, 0), 1);
            const percent = (1 - safeProgress) * 100;

            progressFill.style.width = `${percent}%`;
            planeIcon.style.left = `calc(${percent}% - 10px)`;
        }
    }

});
