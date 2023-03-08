//fun facts question array
let funFactsTinubu = [
    "I was born in Lagos, Nigeria", 
    "My name is Bola Tinubu ",
    "I am a Nigerian politician",
    "I am the National Leader of the All Progressives Congress (APC)",
];

//random number generator
function randomNum() {
    return Math.floor(Math.random() * funFactsTinubu.length); //here the * is used to multiply the random number by the length of the array so that the random number is within the range of the array
}

//add event listener to the button btn1
document.getElementById("btn1").addEventListener("click", randomFact);

function randomFact() {
    let random = randomNum();
    document.getElementById("result").innerHTML = funFactsTinubu[random];

    //loop through the array    
    for (let i = 0; i < funFactsTinubu.length; i++) {
        console.log(funFactsTinubu[i]);
    } 
}
//================================================================================================
// Code for when the images are clicked on and greyed out
//================================================================================================

//add event listener to the image img-tinubu
let imgTinubu = document.getElementById("img-tinubu");
imgTinubu.addEventListener("click", function() {
    // imgTinubu.style.display = "none"; //hide the image when clicked test purposes only
    imgTinubu.style.opacity = ".3";      //grey out the image when clicked
    imgTinubu.style.transition = "opacity .5s ease-in-out"; //add transition effect to the image
});

//add event listener to the image img-petobi 
let imgPeterObi = document.getElementById("img-petobi");
imgPeterObi.addEventListener("click", petObiGreyedOut);    // this function should be global so that it can be called in other functions

function petObiGreyedOut() {
    imgPeterObi.style.opacity = ".3";      //grey out the image when clicked
    imgPeterObi.style.transition = "opacity .5s ease-in-out"; //add transition effect to the image
};

//add event listener to the image img-rabiu
let imgRabiu = document.getElementById("img-rabiu");
imgRabiu.addEventListener("click", rabiuGreyedOut);    // this function should be global so that it can be called in other functions

function rabiuGreyedOut() {
    imgRabiu.style.opacity = ".3";      //grey out the image when clicked
    imgRabiu.style.transition = "opacity .5s ease-in-out"; //add transition effect to the image
};

//add event listener to the image img-atiku
let imgAtiku = document.getElementById("img-atiku");
imgAtiku.addEventListener("click", atikuGreyedOut);    // this function should be global so that it can be called in other functions

function atikuGreyedOut() {
    imgAtiku.style.opacity = ".3";      //grey out the image when clicked
    imgAtiku.style.transition = "opacity .5s ease-in-out"; //add transition effect to the image
};

//================================================================================================
// Code for when the reveal button is clicked
//================================================================================================

let imageCardOne = document.getElementById("img1");
let imageCardTwo = document.getElementById("img2");
let imageCardThree = document.getElementById("img3");
let imageCardFour = document.getElementById("img4");

let revealBtn = document.getElementById("reveal-btn");
revealBtn.addEventListener("click", revealAnswer);

function revealAnswer() {

    alert("The correct answer is Bola Tinubu"); //test purposes only

    for (let i = 0; i < answer.length; i++) {  // will have to create an array of the answers
        console.log(funFactsTinubu[i]);
    }
    if (answer === "img-tinubu") {
        imageCardOne.style.color = "green";
        imageCardTwo.style.color = "red";
        imageCardThree.style.color = "red";
        imageCardFour.style.color = "red";
    } else if (answer === "img-petobi") {
        imageCardOne.style.color = "red";
        imageCardTwo.style.color = "green";
        imageCardThree.style.color = "red";
        imageCardFour.style.color = "red";
    } else if (answer === "img-rabiu") {
        imageCardOne.style.color = "red";
        imageCardTwo.style.color = "red";
        imageCardThree.style.color = "green";
        imageCardFour.style.color = "red";
    }
    else if (answer === "img-atiku") {
        imageCardOne.style.color = "red";
        imageCardTwo.style.color = "red";
        imageCardThree.style.color = "red";
        imageCardFour.style.color = "green";
    }
};

