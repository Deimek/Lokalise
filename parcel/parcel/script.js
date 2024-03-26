const burgerHandler = () => {
    const burgerBtn = document.querySelector(".burger");
    const nav = document.querySelector(".header-nav");

    if (!burgerBtn && !nav) return;

    burgerBtn.addEventListener("click", () => {
        if (nav.classList.contains("show")) {
            nav.classList.remove("show");
        } else {
            nav.classList.add("show");
        }
    });
};

burgerHandler();