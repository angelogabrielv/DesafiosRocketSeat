let show = true;

const menuSection = document.querySelector(".menuSection")
const menuToggle = menuSection.querySelector(".menuToggle")

menuToggle.addEventListener("click", () => {

    menuSection.classList.toggle("on", show)

    document.body.style.overflow = show ? "hidden" : "initial"

    show = !show;
})