// work with menu
const menuElement = document.querySelector(".js-menu");
const burgerBtn = document.querySelector(".js-header-burger");
let burgerToggle = false;

burgerBtn.addEventListener("click", () => {
    burgerToggle = !burgerToggle;
    const burgerIcon = document.querySelector(".js-burger-icon");

    if (burgerToggle) {
        burgerIcon.setAttribute("src", "img/close.svg");
        burgerIcon.setAttribute('width', '35');
        burgerIcon.setAttribute('height', '35');
        menuElement.classList.add("active");
        document.body.classList.add("is-menu");
    } else {
        burgerIcon.setAttribute("src", "img/burger.svg");
        burgerIcon.setAttribute('width', '40');
        burgerIcon.setAttribute('height', '40');
        menuElement.classList.remove("active");
        document.body.classList.remove("is-menu");
    }
});

// work with anchors link
function scrollToAnchor(anchorId) {
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const anchorId = this.getAttribute("href").substring(1);
        scrollToAnchor(anchorId);
    });
});
