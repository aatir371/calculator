let digit_input = [];
let optr;
// let current_optr;
let operator_first_click = true;
let num1, num2;
let result;

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
        // console.log(this.value);
        digit_input.push(this.value)
        console.log(digit_input)
        // console.log(typeof digit_input[0]);
    });
});

document.querySelectorAll('.optr-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // optr = current_optr;
        // current_optr = this.value;
        // console.log(current_optr);

        if (operator_first_click){
            operator_first_click = !operator_first_click;
            num1 = str_to_num(digit_input);
            // console.log(num1);
            // optr = this.value;
            // console.log(optr);
        } else{
            num2 = str_to_num(digit_input);
            // console.log(num2);
            // perform calculations | result => num1
            result = calculate(num1, num2, optr);
            console.log(result);
            num1 = result;
        }
        optr = this.value;
        console.log(optr);
        digit_input = [];
    });
});


document.getElementById('get-result').onclick = function(){
    num2 = str_to_num(digit_input);
    result = calculate(num1, num2, optr);
    console.log(result);
    num1 = result;
}




// operator_first_click = true; (when AC is pressed)