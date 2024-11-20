let topelement = document.querySelector(".top");
let menu = document.querySelector(".toogle");
let links = document.querySelector(".nav");
let section = document.querySelector(".continer");
let words = ["Freelancer", "Front-End-Developer", "Developer", "Instructor"];
let wordindex = 0;
let charindex = 0;
let skill_section = document.querySelector(".skills .content");
let spanel = document.querySelectorAll(".progress span");
let up = document.querySelector(".up");

menu.onclick = function() {
    links.classList.toggle("active");
    if (links.classList.contains("active")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-x")
    } else {
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-x")

    }
}
links.onclick = function() {
    links.classList.remove("active");
    menu.classList.remove("fa-x");
    menu.classList.add("fa-bars");


}

update();

function update() {
    charindex++;
    section.innerHTML = `<h3>Im ${words[wordindex].slice(0, 1) === "I" ? "In" : "a"} ${words[wordindex].slice(0, charindex)}</h3>`;
    if (charindex === words[wordindex].length) {
        wordindex++;
        charindex = 0;
    }
    if (wordindex === words.length) {
        wordindex = 0;
    }
    setTimeout(update, 100);
}
window.onscroll = function() {
    if (window.scrollY >= skill_section.offsetTop) {
        spanel.forEach((ele) => {
            ele.style.width = ele.dataset.goal;
        })
    }
    if (window.scrollY >= 800) {
        up.classList.add("active")

    } else {
        up.classList.remove("active")


    }
}
up.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal(".landing", { delay: 100, origin: "left" })
sr.reveal(".about", { delay: 100, origin: "left" })
sr.reveal(".serives", { delay: 100, origin: "left" })
sr.reveal(".project ", { delay: 100, origin: "left" })