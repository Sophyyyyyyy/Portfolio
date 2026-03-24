const mobileBtn = document.querySelector(".mobileBTN");
const mobileMenu = document.querySelector(".mobileMEN");
const body = document.querySelector("body");
const icons = document.querySelectorAll(".mobile-btn");

// 1. Открытие/закрытие бургер-меню
mobileBtn.addEventListener("click", function() {
    mobileMenu.classList.toggle("hide");
    body.classList.toggle("off-scroll");
    icons.forEach(icon => icon.classList.toggle("btn-hide"));
});

// 2. Закрытие меню при клике на ссылки
const navLinks = document.querySelectorAll(".navll");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hide");
        body.classList.remove("off-scroll");
        icons[0].classList.remove("btn-hide");
        icons[1].classList.add("btn-hide");
    });
});

// 3. Автоматическое переключение активной ссылки при скролле
window.onscroll = function() {
    let h = document.documentElement.clientHeight;
    let classLink = '.main-link';

    // Проверяем положение прокрутки (с учетом порядка твоих секций)
    if (window.scrollY >= h * 4) {
        classLink = '.comments-link';
    } else if (window.scrollY >= h * 3) {
        classLink = '.skills-link'; // Навыки у тебя 4-я секция
    } else if (window.scrollY >= h * 2) {
        classLink = '.works-link';  // Работы у тебя 3-я секция
    } else if (window.scrollY >= h * 0.8) { // 0.8 чтобы срабатывало чуть раньше
        classLink = '.about-link';
    } else {
        classLink = '.main-link';
    }

    // Находим все ссылки с этим классом (и в обычном, и в мобильном меню)
    let newActiveLinks = document.querySelectorAll(classLink);
    let currentActiveLinks = document.querySelectorAll('.navll.active');

    // Если ссылка еще не активна — обновляем
    if (!newActiveLinks[0].classList.contains('active')) {
        // Убираем active у всех, где он был
        currentActiveLinks.forEach(link => link.classList.remove('active'));
        // Добавляем active новым ссылкам
        newActiveLinks.forEach(link => link.classList.add('active'));
    }
};