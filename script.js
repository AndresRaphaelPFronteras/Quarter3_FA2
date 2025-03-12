
// Minimize the comments (if your text editor lets you) to improve the readability.

var numberOneGlobal;
var numberTwoGlobal;

function getInput(elementId) {
    
    if (elementId == "numberOneInput") {
        numberOneGlobal = Number(document.getElementById("numberOneInput").value);
    }
    
    else {
        numberTwoGlobal = Number(document.getElementById("numberTwoInput").value);
    }
}

function mainProcedure(numberOne, numberTwo) 
{ 
    console.log(typeof numberOne + ", " + typeof NumberTwo);
    
    if (typeof numberOne != "number"  ||  typeof numberTwo != "number") {
        document.getElementById("resultOutput").innerHTML = 
            "Error. Please enter a valid input in the box/es.";
        return;
    }
    
    var operationToBePerformed = determineOperation();
    var answerToProblem = performOperation(numberOne, numberTwo, operationToBePerformed);
    
    showResult(numberOne, numberTwo, operationToBePerformed, answerToProblem);
}


// Functions used and called above.

function determineOperation() {  // The button ids are named the way they are in order to use them in showResult().
    console.log(button.id); 
    return button.id;
}

function performOperation(numberX, numberY, operation) {  
    
    switch (operation) {
        case sum:
            return numberX + numberY;
        case difference:
            return numberX - numberY;
        case product:
            return numberX * numberY;
        case quotient:
            return numberX / numberY;
        case remainder:
            return numberX % numberY;
        default:
            return "dying alone in a 10 foot hole."; /* It's just an error message. It makes sense if you see where it is 
                                                      used in showResult() (below.)
                                                   */
    }
}

function showResult(numberX, numberY, operation, result) {
    document.getElementById("resultOutput").innerHTML =
        "The " + operation + " of " + numberX + " and " + numberY + " is " + result + ".";
}

