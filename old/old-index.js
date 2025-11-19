let digit_input = [];
let optr = null;
let operator_first_click = true;
let is_already_calculaed_using_equal_to = false;
let num1 = null;
let num2 = null;
let result = null;

// let multi = ['aatir', 123, true, 'bro', 541];

// multi.forEach(element => {
//     console.log(typeof element);
// });

// document.getElementById('num-btn').onclick = function(){
//     num = document.getElementById('num-btn').value;
//     console.log(num);
// }

// document.getElementsByClassName('num-btn').onclick = function(){
//     num = document.getElementById('num-btn').value;
//     console.log(num);
// }


function str_to_num(str_arr){
    const int_arr = str_arr.map(Number);
    let number = 0;
    for (let i=0; i < int_arr.length; i++){
        number += int_arr[i] * (10 ** (int_arr.length - (i+1)))
    }
    return number;
}

function calculate(number1, number2, opertor){
    switch (opertor) {
        case '%':
            // look into how this is worked
            break;
        case '/':
            return (number1 / number2);
            break;
        case 'x':
            return (number1 * number2);
            break;
        case '-':
            return (number1 - number2);
            break;
        case '+':
            return (number1 + number2);
            break;
        default:
            console.error("Opertor is incorrect!");
    }

}


document.querySelectorAll('.num-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        digit_input.push(this.value)
        console.log(digit_input)
    });
});

document.querySelectorAll('.optr-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // optr = this.value;
        // console.log(optr);
        if (operator_first_click){
            operator_first_click = false;
            num1 = str_to_num(digit_input);
        } else{
            num2 = str_to_num(digit_input);
            result = calculate(num1, num2, optr);
            console.log(result);
            num1 = result;
        }
        optr = this.value;
        console.log(optr);
        digit_input = [];
        // console.log(digit_input);
    });
});


document.getElementById('get-result-using-equal-to').onclick = function(){
    num2 = str_to_num(digit_input);
    result = calculate(num1, num2, optr);
    console.log(result);
    num1 = result;
    reset_equal_to();
}

document.getElementById('clear-all').onclick = function(){
    full_reset_AC();

}


function reset_equal_to(){
    // num1 = null;
    num2 = null;
    digit_input = [];
    operator_first_click = true;
}

function full_reset_AC(){
    reset_equal_to();
    num1 = null;
    operator_first_click = true;
    
}



// the logic i'm implementing is wrong; i need to keep storing computations in array till equal is pressed

