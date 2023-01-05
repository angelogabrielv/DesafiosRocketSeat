let firstSidebar = document.querySelector(".firstSidebar")
let secondSidebar = document.querySelector(".secondSidebar")
let dashboard = document.querySelector("main div")

function openSidebar() {
    secondSidebar.style.animation = "animateOpen 100ms"
    firstSidebar.style.display = "none";
    secondSidebar.style.display = "flex";
    dashboard.style.display = "flex";
}

function closeSidebar() {
    secondSidebar.style.display = "none";
    firstSidebar.style.display = "flex";
    dashboard.style.display = "none";
}