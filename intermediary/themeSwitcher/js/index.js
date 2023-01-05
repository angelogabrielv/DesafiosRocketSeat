
let circleOne = document.querySelector(".circleOne")
let circleTwo = document.querySelector(".circleTwo")
let header = document.querySelector("header")
let nav = document.querySelector('.menuSection nav')
let main = document.querySelector("main")
let text = document.querySelector(".container")
let menuSectionOn = document.querySelector(".menuSection .on")
let headerMain = document.querySelector(".headerMain")
let test = document.querySelector("li:hover")

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")


// Change to theme black
circleOne.addEventListener("click", () =>{

    nav.style.backgroundColor = "#191970"
    circleOne.style.display = "none"
    circleTwo.style.display = "block"
    circleTwo.style.animation = "leftToRight 400ms"
    header.style.background = "#191970"
    main.style.backgroundColor = "#051130"
    text.style.color = "#d3d3dc"
    menuSection.style.backgroundColor = "#191970"
    headerMain.style.backgroundColor = "#191970"
    one.style.backgroundColor = "#87cefa"
    two.style.backgroundColor = "#87cefa"
    three.style.backgroundColor = "#87cefa"
})


// Change to theme white
circleTwo.addEventListener("click", () => {

    nav.style.backgroundColor = "#87cefa"
    circleOne.style.display = "block"
    circleTwo.style.display = "none"
    circleOne.style.animation = "rightToLeft 400ms"
    header.style.background = "#87cefa"
    main.style.backgroundColor = "#dedede"
    text.style.color = "#051130"
    menuSection.style.backgroundColor = "#87cefa"
    headerMain.style.backgroundColor = "#87cefa"
    one.style.backgroundColor = "#051130"
    two.style.backgroundColor = "#051130"
    three.style.backgroundColor = "#051130"
})