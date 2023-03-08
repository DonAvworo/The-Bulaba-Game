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

let imgTinubu = document.getElementById("img-tinubu");
imgTinubu.addEventListener("click", function() {
    // imgTinubu.style.display = "none"; //hide the image when clicked test purposes only
    imgTinubu.style.opacity = ".3"; //hide the image when clicked
    imgTinubu.style.transition = "opacity .5s ease-in-out"; //add transition effect to the image
});
