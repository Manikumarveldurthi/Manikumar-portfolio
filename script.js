const texts = [
    "Java Full Stack Developer",
    "Backend Developer",
    "AI Enthusiast",
    "Spring Boot Developer"
];

let speed = 100;

const textElements = document.querySelector(".typing-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){

    if(charIndex < texts[textIndex].length){

        textElements.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter,speed);

    }
    else{

        setTimeout(eraseText,1500);

    }

}

function eraseText(){

    if(textElements.innerHTML.length > 0){

        textElements.innerHTML =
        textElements.innerHTML.slice(0,-1);

        setTimeout(eraseText,50);

    }
    else{

        textIndex++;

        if(textIndex >= texts.length){
            textIndex = 0;
        }

        charIndex = 0;

        setTimeout(typeWriter,500);

    }

}

window.onload = typeWriter;

/* SCROLL PROGRESS BAR */

window.addEventListener("scroll",()=>{

    let scrollTop =
    document.documentElement.scrollTop;

    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
    .style.width = progress + "%";

});




/* LOADER */

window.addEventListener("load",()=>{

    const loader =
    document.querySelector(".loader");

    loader.style.opacity = "0";

    setTimeout(()=>{

        loader.style.display = "none";

    },1000);

});


/* ACTIVE NAVIGATION */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")
        .includes(current)){

            link.classList.add("active");

        }

    });

});


/* CARD TILT EFFECT */

const cards =
document.querySelectorAll(
".project-card,.skill-card,.achievement-card"
);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width)-0.5)*15;

        const rotateX =
        ((y / rect.height)-0.5)*-15;

        card.style.transform =
        `rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "rotateX(0) rotateY(0)";

    });

});


/* EMAILJS */

emailjs.init("oZTyWI1O039tigptX");

document
.getElementById("contact-form")

.addEventListener("submit",function(event){

    event.preventDefault();

    emailjs.sendForm(

        "service_estgd8g",

        "template_tags7eo",

        this

    )

    .then(()=>{

    showToast(
        "Message Sent Successfully!",
        "success"
    );

    document
    .getElementById("contact-form")
    .reset();

})

    .catch((error)=>{

    showToast(
        "Failed To Send Message",
        "error"
    );

    console.log(error);

});

});


/* TOAST FUNCTION */

function showToast(message,type){

    const toast =
    document.getElementById("toast");

    toast.innerText = message;

    toast.className =
    `show ${type}`;

    setTimeout(()=>{

        toast.className =
        toast.className.replace("show","");

    },3000);

}