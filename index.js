let digit_input = [];
let computaion_array = [];
let optr = null;
let num1 = null;
let num2 = null;
let num1Lock = false;
let result = null;

///////////////////////////////////////////////////////////////////////////
//////////////////////////////// FUNCTIONS ////////////////////////////////
///////////////////////////////////////////////////////////////////////////

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

function get_computaion_result(comp_array){
    console.log(comp_array);
    for (let i=0; i < comp_array.length; i++){
        if (typeof comp_array[i] === "number"){
            if (!num1Lock){
                num1 = comp_array[i];
                num1Lock = true;
            }else {
                num2 = comp_array[i];
            }
        } else if (typeof comp_array[i] === "string"){
            if (typeof comp_array[i+1] === "string"){
                continue;
            }
            optr = comp_array[i];
            if (num2 === null){
                // console.warn("Warning: num1 is not defined!");
                continue;
            } else{
                num1 = calculate(num1, num2, optr);
            }
        }else{
            console.error("Error: input type is not correct!")
        }
    }
    return calculate(num1, num2, optr);
}



/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// BUTTON RESPONSE ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


document.querySelectorAll('.num-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        digit_input.push(this.value)
        // console.log(digit_input)
    });
});

document.querySelectorAll('.optr-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        computaion_array.push(str_to_num(digit_input));
        digit_input = []
        computaion_array.push(this.value);
    });
});

document.getElementById('get-result-using-equal-to').onclick = function(){
    computaion_array.push(str_to_num(digit_input));
    digit_input = []
    result = get_computaion_result(computaion_array);
    console.log("result: " + result);
    num1 = result;
    reset();
}

document.getElementById('clear-all').onclick = function(){
    reset();
    num1 = null;
}



function reset(){
    digit_input = [];
    computaion_array = [];
    optr = null;
    num1 = null;
    num2 = null;
    num1Lock = false;
    result = null;
}

// controler function (js main function)