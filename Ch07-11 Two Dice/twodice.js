// Function to generate a random number within a custom range
function getCustomDiceSpots(min, max) {
    var range = 
    var spots = Math.floor(Math.random() * (range)) + min;
    return spots;
}
// Function to extract and validate a number from an HTML input element
function getNumberFromElement(elementID) {
    var element = 
    var text = 

    var result = 

    if (isNaN(result)) {
        // fail with bad number input
        element.className = "menuInputError";
        return NaN;
    }

    // get the max and min values from the input field
    var max = Number(element.?????("max"));
    var min = Number(element.?????("min"));

    if (result > max || result < min) {
        // fail because outside range
        element.className = "menuInputError";
        return NaN;
    }

    // if we get here the number is valid
    // set to normal background
    element.className = "menuInput";

    return result;
}
// Function to roll a custom range dice and display the result
function doRollDice(minElementName, maxElemementName, outputElementName) {


    var outputElement = 

    var minRand = 
    var maxRand = 

    if (isNaN(minRand) || isNaN(maxRand)) {
        outputElement.textContent="Invalid range values";
        return;
    }

    if (minRand >= maxRand) {
        outputElement.textContent="Minimum above maximum";
        return;
    }

    var spots = getCustomDiceSpots(minRand, maxRand);
    var message = "Rolled: " + spots;
    outputElement.textContent = message;
}

