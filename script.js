"use strict"

//////////////////////////////////////////////////////////////////

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const openModal = function (e) {
    e.preventDefault()
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))




btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})

const header = document.querySelector(".header")


const message = document.createElement("div")
message.classList.add("cookie-message")
message.textContent = "We use cookies to improve functionality and analytics"

message.innerHTML = 'We use cookies to improve functionality and analytics. <button class ="btn btn--close-cookie"> Got it </button>'

header.append(message)
document.querySelector(".btn--close-cookie").addEventListener("click", function () {
    message.remove()
})
message.style.backgroundColor = "#37383d"
message.style.width = "120%"

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px"

///////////////////////////////////////////////////////////////////////////


//select html document element


// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(".header")
// const allSections = document.querySelectorAll(".section")



// document.getElementById("#section--1")

// //this give us back not NODE colection it gives HTML Collection
// // const allButtons = document.getElementsByTagName("button")



// // document.getElementsByClassName("btn")

// //creating and inserting elements

// const message = document.createElement("div")
// message.classList.add("cookie-message")
// message.textContent = "We use cookies to improve functionality and analytics"

// message.innerHTML = 'We use cookies to improve functionality and analytics. <button class ="btn btn--close-cookie"> Got it </button>'


// //prepend adds element to DOM as first child and append adds element to the html DOM like the last child but you can only have in one or another place

// // header.prepend(message)
// header.append(message)

// //we can have a clone message if we do this

// // header.append(message.cloneNode(true))


// //we can have before or after this element

// // header.before(message)
// // header.after(message)

// //and we can delete element

// document.querySelector(".btn--close-cookie").addEventListener("click", function () {
//     message.remove()
// })


// //styles

// //this is give us inline style

// message.style.backgroundColor = "#37383d"
// message.style.width = "120%"


// //we cant get to see styles directly if we didint use it before in inline styles
// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// //but we can see styles properties we can use with this

// console.log(getComputedStyle(message).color);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px"


// document.documentElement.style.setProperty("--color-primary", "orangered")


// //ATRIBUTES

// //atributes are all class, id, src, alt,and etc

// const logo = document.querySelector(".nav__logo")

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);


// //we can set atributes

// logo.alt = 'beautiful logo'

// //we can set new atributes like this

// logo.setAttribute("company", "Bankist")

// //we can get realitives and absolute atributes

// //realitive
// console.log(logo.getAttribute("src"));

// //absolute
// console.log(logo.src);


// //DATA atributes

// console.log(logo.dataset.versionNumber);


// //CLASSES

// // logo.classList.add()
// // logo.classList.remove()
// // logo.classList.toggle()
// // logo.classList.contains() // not includes

// // //dont use because it change all classes
// // logo.className = "mantas"


//JUST PRACTICE

// const header = document.querySelector(".header")
// const message = document.createElement("div")

// header.append(message)

// message.innerHTML = "This is your cookies just press ok button and you have ypur own cookie... <button class= 'btn btn__ok'> OK </button>"


// message.classList.add("cookie-message")
// const body = document.querySelector("body")

// document.querySelector(".btn__ok").addEventListener("click", function () {
//     alert("you have a virus you stupid and you just delete my page....THANK YOU!!!!")
//     message.remove()
//     body.remove()


// })



//old school scroll smooth



const btnScrollTo = document.querySelector(".btn--scroll-to")
const section1 = document.querySelector("#section--1")

btnScrollTo.addEventListener("click", function (e) {
    // e.preventDefault()
    const s1coords = section1.getBoundingClientRect()
    console.log(s1coords);


    //here you can see possition of current scroll on page 

    console.log(e.target.getBoundingClientRect());

    //scrolling

    // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)


    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset, top: s1coords.top + window.pageYOffset,
    //     behavior: "smooth"
    // })


    //modern way to do smooth scrolling

    section1.scrollIntoView({ behavior: "smooth" })




})


// you can see x and y position of page

console.log("current scroll (X/Y)", window.pageXOffset, pageYOffset);

//also you can see height and width of the page to see you need to do this


console.log("Height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth);

