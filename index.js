//Fade unactive navigation items

const navContainer = document.querySelector(".wrapper--navigation");

const fade = function (e) {
    if( e.target.classList.contains("nav__item")) {
        const targetLink = e.target;
        const linkSiblings = targetLink.closest(".wrapper--navigation").querySelectorAll(".nav__item");

        linkSiblings.forEach( sibling => {
            if(sibling !== targetLink) {
                sibling.style.opacity = this;
            }
        })
    }
}

navContainer.addEventListener("mouseover", fade.bind(0.5))
navContainer.addEventListener("mouseout", fade.bind(1))


//Smooth scroll navigation
const sections = document.querySelectorAll("section")

navContainer.addEventListener("click", (e) =>{
    sections.forEach(section => {
        if(section.id.toLocaleLowerCase() === e.target.textContent.toLocaleLowerCase()){
            const scrollHere = section.id;
            scrollHere.scrollIntoView({behavior: "smooth"})
            
            
        }
    })
})