let mouse1 = document.querySelector("#Num1");
let mouse2 = document.querySelector("#Num2");
let myButton = document.querySelector("body main section button");
let myInput = document.querySelector("body main section input");

mouse1.addEventListener('mouseenter', e => {
    let myRand = Math.round(12 * Math.random());
    mouse1.innerHTML = myRand;
    console.log(`Random Number for Num1: ${myRand}`);
    myInput.classList = "";
    myInput.innerText = "";
});


mouse2.addEventListener('mousedown', e => {
    let myRand2 = Math.round(12 * Math.random());
    mouse2.innerHTML = myRand2;
    console.log(`Random Number for Num2: ${myRand2}`);
    myInput.classList = "";
    myInput.innerText = "";
});


myButton.addEventListener('click', e => {
    if ((Number(mouse1.innerText) + Number(mouse2.innerText)) === Number(myInput.value)) {
        myInput.classList = "happy";
        console.log("Yay!");
    } else {
        myInput.classList = "sad";
        console.log("Try Again!");
    }
});

/* Your code here */
// Random number generation: Math.round(12 * Math.random());