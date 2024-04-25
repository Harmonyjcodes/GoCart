
var mToogle = document.getElementById("menu-toggle")
var menu = document.getElementById("menu")
const slides = document.getElementsByClassName("slide")

//code for hammbugger
const active = () => {
    menu.classList.toggle("active")
}
mToogle.addEventListener("click", active)

//slider code

let slideIndex = 0

const hide = () =>{
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
}
const showSlides = () =>{
    hide()

    slideIndex++
    if(slideIndex > slides.length){
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block"
    setTimeout(showSlides, 10000)
}
showSlides()


//BACK TO TOP
 const backToTop = () =>{
     document.documentElement.scrollTop = 0
 }
