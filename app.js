// Moverment Animation to happen
const card = document.querySelector('.cards');
const container = document.querySelector('.container');
const ccard = document.querySelectorAll('.card');


// Items
var title = document.querySelector('.title');
var names = document.querySelector('.name img');
var description = document.querySelector('.info h3');
var pick = document.querySelector('.pick');
var final = document.querySelector('.final');


// Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Different Pick Event
pick.addEventListener("click", e => {
    var hero = e.target.id;
    var cardd = e.target.parentElement.parentElement.parentElement.classList.value;
    removeShow();
    card.style.display = "flex";
    card.style.position = "absolute";
    card.style.left = "15rem";
    var classOF1 = document.querySelector(`.${hero}`);
    var classOF2 = document.querySelector(`.${cardd}`);
    classOF1.classList.add('show');
    classOF1.style.marginLeft = "5rem";
    classOF1.style.transformStyle = "preserve-3d";
    classOF1.style.minHeight = "80vh";
    classOF1.style.width = "30rem";
    classOF1.style.borderRadius = "30px";
    classOF1.style.boxShadow = "0 20px 20px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.2)";
    classOF1.style.padding = "0 5rem";


    console.log(classOF1.childNodes);
    // Items
    var newtitle = classOF1.childNodes[1];
    var newdescription = classOF1.childNodes[3];


    // Animate In
    card.addEventListener("mouseenter", e => {
        card.style.transition = "none";
        // PopOut
        newtitle.style.transform = "translateZ(150px)";
        newdescription.style.transform = "translateZ(125px)";
    });


    // Animate Out
    card.addEventListener("mouseleave", e => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = "rotateY(0deg)";
        // PopIn
        newtitle.style.transform = "translateZ(0px)";
        newdescription.style.transform = "translateZ(0px)";

    });
});

function removeShow() {
    ccard.forEach(item => item.classList.remove('show'));
}


// Animate In
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    // PopOut
    title.style.transform = "translateZ(150px)";
    names.style.transform = "translateZ(200px) rotate(-360deg)";
    description.style.transform = "translateZ(125px)";
    pick.style.transform = "translateZ(100px)";
    final.style.transform = "translateZ(75px)";
});


// Animate Out
container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateY(0deg)";
    // PopIn
    title.style.transform = "translateZ(0px)";
    names.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    pick.style.transform = "translateZ(0px)";
    final.style.transform = "translateZ(0px)";

});