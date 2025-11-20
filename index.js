let digit_input = [];
let computaion_array = [];
let computaion_string = [];
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
            return (number1 % number2);
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

function reset(){
    digit_input = [];
    computaion_array = [];
    computaion_string = [];
    optr = null;
    // num1 = null;
    num2 = null;
    num1Lock = false;
    result = null;
}

function ful_reset(){
    reset();
    num1 = null;
    document.getElementById("computation").textContent = "";
    document.getElementById("result").textContent = "0";

    ////////////////
    enableButton("equal-to-btn");
}

// Function to disable the button
function disableButton(button_id) {
    const button = document.getElementById(button_id);
    button.disabled = true; // Set to true to disable
}

// Function to enable the button
function enableButton(button_id) {
    const button = document.getElementById(button_id);
    button.disabled = false; // Set to false to enable
}

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// BUTTON RESPONSE ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


document.querySelectorAll('.num-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        digit_input.push(this.value);

        // following two lines are just for display purpose
        computaion_string.push(this.value);
        document.getElementById("computation").textContent = computaion_string.join(" ");
        console.log(computaion_string.join(" "));

        ////////////////
        enableButton("equal-to-btn");
    });
});

document.querySelectorAll('.optr-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        if (!num1){
            // console.log(digit_input.join(''));
            // console.log(parseFloat(digit_input.join('')));
            computaion_array.push(parseFloat(digit_input.join('')));
            digit_input = []
        }else {
            computaion_array.push(num1);

            // following two lines are just for display purpose
            computaion_string.push(num1);
            document.getElementById("computation").textContent = computaion_string.join(" ");
        }

        // following two lines are just for display purpose
        computaion_string.push(this.value);
        document.getElementById("computation").textContent = computaion_string.join(" ");

        ////////////////
        disableButton("equal-to-btn");
        
        computaion_array.push(this.value);
        console.log(this.value);
    });
});

document.getElementById('equal-to-btn').onclick = function(){
    computaion_array.push(parseFloat(digit_input.join('')));
    digit_input = []
    result = get_computaion_result(computaion_array);
    console.log("result: " + result);
    num1 = result;
    document.getElementById("computation").textContent = result;
    document.getElementById("result").textContent = result;
    reset();
}

document.getElementById('clear-all').onclick = function(){
    ful_reset();
}





// look into: controler function (js main function)