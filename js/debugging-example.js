



function getNum1(){
    return inputs[0].value;
}
function getNum2(){
    return inputs[1].value;
}

function sumNumber(){
    let num1 = getNum1();
    let num2 = getNum2();
    let sum = num1 + num2;
    display(sum);
}

function display(text){
    answer.textContent = text;
}

function onClick(e){   
 sumNumber(); 
 e.preventDefault();
}
let inputs = document.querySelectorAll('input');
let answer = document.querySelector('#answer');
let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', onClick);


