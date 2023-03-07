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

    for (let i = 0; i < funFactsTinubu.length; i++) {
        console.log(funFactsTinubu[i]);
    }
    
}