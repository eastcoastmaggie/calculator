const operators = new Set(["+", "-", "x", "/"]);
const buttons = document.querySelectorAll('.btn');


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(equation){
    let result = null;
    let error = false;
    let errorMessage = "";

    let splitEquation = "";

    while (equation.length > 2){
        
        let a = Number(equation.shift());
        if (a == NaN){
            error = true;
            errorMessage = "Error: a not a number.";
            return errorMessage;
        }
        let operator = equation.shift();
        if(!operators.has(operator)){
            error = true;
            errorMessage = "Error: unknown equation.";
            return errorMessage;
        }
        let b = Number(equation.shift());
        if (b == NaN){
            error = true;
            errorMessage = "Error: b not a number.";
            return errorMessage;
        }

        switch (operator){
            case "+":
                result = add(a, b);
                break;
            case "-":
                result = subtract(a, b);
                break;
            case "x":
                result = multiply(a, b);
                break;
            case "/":
                result = divide(a, b);
                break;
            default:
                return "Error.";
        }
        equation.unshift(result);
    }
    if(error){
        return errorMessage;
    }
    return equation;
}

let equationArray = [];
equationArray.push("0");
let lastKeyOperator = false;
let termPosition = 0;
const display = document.querySelector("#display");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (equationArray.join(" ").length < 30){
            if (Number(btn.textContent) || btn.textContent == "0" ){
                if(lastKeyOperator == true){
                    termPosition++;
                    equationArray[termPosition] = 0;
                }
                if(equationArray[termPosition]=="0"){
                    let equationString = equationArray[termPosition] + btn.textContent;
                    equationArray[termPosition] = String(parseFloat(equationString));
                } else { 
                    equationArray[termPosition] += btn.textContent;
                }
                    lastKeyOperator = false;
            } else if(btn.textContent == "." && String(equationArray[termPosition]).indexOf(".") == -1){
                if(lastKeyOperator == true || equationArray[termPosition].length == 0){
                    equationArray[termPosition] = ("0");
                }
                    equationArray[termPosition] += ".";
                    lastKeyOperator = false;
            } else if(operators.has(btn.textContent)){
                if (lastKeyOperator == false){
                    termPosition++;
                    equationArray.push("0");
                }
                equationArray[termPosition] = btn.textContent;
                lastKeyOperator = true;
            } else if (btn.textContent == "c" || btn.textContent == "on"){
                    equationArray = [];
                    equationArray.push("0");
                    lastKeyOperator = false;
                    termPosition = 0;

            } else if (btn.textContent == "="){
                equationArray = operate(equationArray);
                lastKeyOperator = false;
                termPosition = 0;
                equationArray[termPosition] = String(parseFloat(equationArray[termPosition]).toFixed(3));
            } else if (btn.textContent == "-/+"){
                if (equationArray[termPosition] == "0"){
                    equationArray[termPosition] = "-";
                    lastKeyOperator = false;
                } else if(lastKeyOperator == true){
                    termPosition++;
                    equationArray.push ("-");
                    lastKeyOperator = false; 
                } else if (parseFloat(equationArray[termPosition])){
                    let tempTerm = parseFloat(equationArray[termPosition]) * -1;
                    equationArray[termPosition] = tempTerm;
                }
            }

            display.textContent = equationArray.join(" ");          
        }
    })
});
