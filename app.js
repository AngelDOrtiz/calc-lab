// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
const input1 = document.getElementById("input1");
console.log(input1)

const input11 = document.getElementById("input11");
console.log(input11)

const addButton = document.getElementById("addButton");
console.log(addButton)

const addAnswer = document.getElementById("addAnswer");
console.log(addAnswer)

//---- Function

addButton.addEventListener("click", () => {
    
    const sum = Number(input1.value) + Number(input11.value);

    console.log(sum);
    
    addAnswer.textContent = sum;
});


//-----------------------

const input2 = document.getElementById("input2");
console.log(input2)

const input22 = document.getElementById("input22");
console.log(input22)

const subtractButton = document.getElementById("subtractButton")
console.log(subtractButton)

const subAnswer = document.getElementById("subAnswer")
console.log(subAnswer)

subtractButton.addEventListener("click", () => {

    const difference = Number(input2.value) - Number(input22.value)
    console.log(difference);

    subAnswer.textContent = difference;
});

//-----------------------------

const input3 = document.getElementById("input3");
console.log(input3)

const input33 = document.getElementById("input33");
console.log(input33)

const divideButton = document.getElementById("divideButton")
console.log(divideButton)
 
const divAnswer = document.getElementById("divAnswer")
console.log(divAnswer)

divideButton.addEventListener("click", () => {

    const quotient = Number(input3.value) / Number(input33.value)
    console.log(quotient)

    divAnswer.textContent = quotient
})
//------------------------------

const input4 = document.getElementById("input4");
console.log(input4)

const input44 = document.getElementById("input44");
console.log(input44)

const multiplyButton = document.getElementById("multiplyButton")
console.log(multiplyButton)

const mulAnswer = document.getElementById("mulAnswer")
console.log(mulAnswer)

multiplyButton.addEventListener("click", () => {

    const product = Number(input4.value) * Number(input44.value)
    console.log(product)

    mulAnswer.textContent = product 
})

//------------------
