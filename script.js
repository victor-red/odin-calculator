let panelNumber = document.querySelector(".panel-number");
panelNumber.textContent = 0;
let operation = [];


let button1 = document.querySelector("#button-one");
let button2 = document.querySelector("#button-two");
let button3 = document.querySelector("#button-three");
let button4 = document.querySelector("#button-four");
let button5 = document.querySelector("#button-five");
let button6 = document.querySelector("#button-six");
let button7 = document.querySelector("#button-seven");
let button8 = document.querySelector("#button-eight");
let button9 = document.querySelector("#button-nine");
let button0 = document.querySelector("#button-zero");

let plusButton = document.querySelector("#plus-button");
let minusButton = document.querySelector("#minus-button");
let multiplyButton = document.querySelector("#multiply-button");
let divideButton = document.querySelector("#divide-button");
let equalsButton = document.querySelector("#equals-button");
let clearButton = document.querySelector("#clear-button");



button1.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "1";
    }
    else{panelNumber.textContent +="1"}
});


button2.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "2";
    }
    else{panelNumber.textContent +="2"}
});


button3.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "3";
    }
    else{panelNumber.textContent +="3"}
});


button4.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "4";
    }
    else{panelNumber.textContent +="4"}
});


button5.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "5";
    }
    else{panelNumber.textContent +="5"}
});


button6.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "6";
    }
    else{panelNumber.textContent +="6"}
});


button7.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "7";
    }
    else{panelNumber.textContent += "7"}
});


button8.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "8";
    }
    else{panelNumber.textContent += "8"}
});


button9.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "9";
    }
    else{panelNumber.textContent +="9"}
});

button0.addEventListener("click", () => {
    if (panelNumber.textContent == "0"){
        panelNumber.textContent = "0";
    }
    else{panelNumber.textContent += "0"}
});



plusButton.addEventListener("click", () => {
    operation.push(panelNumber.textContent);
    if (operation.length == 0){
        return;
    }
    else if(operation.length == 3){
        operation.length = 0;
        operation.push(panelNumber.textContent);
        operation.push("+");
        plusButton.disabled = true;
        minusButton.disabled = false;
        multiplyButton.disabled = false;
        divideButton.disabled = false;
        panelNumber.textContent = '0';
        console.log(operation);
    }
    else{
        operation.push("+");
        plusButton.disabled = true;
        minusButton.disabled = false;
        multiplyButton.disabled = false;
        divideButton.disabled = false;
        panelNumber.textContent = '0';
        console.log(operation);
    }

})


minusButton.addEventListener("click", () => {
    operation.push(panelNumber.textContent);
    if (operation.length == 0){
        return;
    }
    else if(operation.length == 3){
        operation.length = 0;
        operation.push(panelNumber.textContent);
        operation.push("-");
        minusButton.disabled = true;
        plusButton.disabled = false;
        multiplyButton.disabled = false;
        divideButton.disabled = false;
        panelNumber.textContent = '0';
        console.log(operation);
    }
    else{
        operation.push("-");
        minusButton.disabled = true;
        plusButton.disabled = false;
        multiplyButton.disabled = false;
        divideButton.disabled = false;
        panelNumber.textContent = '0';
        console.log(operation);
    }
})


multiplyButton.addEventListener("click", () => {
    operation.push(panelNumber.textContent);
    if (operation.length == 0){
        return;
    }
    else if(operation.length == 3){
        operation.length = 0;
        operation.push(panelNumber.textContent);
        operation.push("*");
        multiplyButton.disabled = true;
        plusButton.disabled = false;
        minusButton.disabled = false;
        divideButton.disabled = false;
        panelNumber.textContent = '0';
        console.log(operation);
    }
    else{
        operation.push("*");
        multiplyButton.disabled = true;
        plusButton.disabled = false;
        minusButton.disabled = false;
        divideButton.disabled = false;
        panelNumber.textContent = '0';
        console.log(operation);
    }
})


divideButton.addEventListener("click", () => {
    operation.push(panelNumber.textContent);
    if (operation.length == 0){
        return;
    }
    else if(operation.length == 3){
        operation.length = 0;
        operation.push(panelNumber.textContent);
        operation.push("/");
        divideButton.disabled = true;
        plusButton.disabled = false;
        minusButton.disabled = false;
        multiplyButton.disabled = false;
        panelNumber.textContent = '0';
        console.log(operation);
    }
    else{
        operation.push("/");
        divideButton.disabled = true;
        plusButton.disabled = false;
        minusButton.disabled = false;
        multiplyButton.disabled = false;
        panelNumber.textContent = '0';
        console.log(operation);
    }
})

clearButton.addEventListener("click", () =>{
    operation.length = 0;
    panelNumber.textContent = 0;
    plusButton.disabled = false;
    minusButton.disabled = false;
    multiplyButton.disabled = false;
    divideButton.disabled = false;
    console.log(operation);
})

equalsButton.addEventListener("click", () =>{
    operation.push(panelNumber.textContent);
    if(operation[1] == "+"){
        panelNumber.textContent = Number(operation[0]) + Number(operation[2]);
        operation.length = 0;
        plusButton.disabled = false;
        minusButton.disabled = false;
        multiplyButton.disabled = false;
        divideButton.disabled = false;
    }
    else if(operation[1] == "-"){
        panelNumber.textContent = Number(operation[0]) - Number(operation[2]);
        operation.length = 0;
        plusButton.disabled = false;
        minusButton.disabled = false;
        multiplyButton.disabled = false;
        divideButton.disabled = false;
        }
    else if(operation[1] == "*"){
        panelNumber.textContent = Number(operation[0]) * Number(operation[2]);
        operation.length = 0;
        plusButton.disabled = false;
        minusButton.disabled = false;
        multiplyButton.disabled = false;
        divideButton.disabled = false;
    }
    else if(operation[1] == "/"){
        if(operation[2] == 0){
            alert("You can't divide by zero.")
            operation.length = 0;
            panelNumber.textContent = 0;
            plusButton.disabled = false;
            minusButton.disabled = false;
            multiplyButton.disabled = false;
            divideButton.disabled = false;
            console.log(operation);
        }
        else{
            panelNumber.textContent = Number(operation[0]) / Number(operation[2]);
            operation.length = 0;
            plusButton.disabled = false;
            minusButton.disabled = false;
            multiplyButton.disabled = false;
            divideButton.disabled = false;
        }
    }
    else{
        operation.length = 0;
        panelNumber.textContent = 0;
    }
    
    
})



