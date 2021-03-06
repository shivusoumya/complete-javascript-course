const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
// best practice to write variable names wth camelcase// currentResult = defaultResult + 10; // == currentResult += 10;

/**
 * 
 * @returns userinput
 * Gets input form input filed
 */
function getUserInput() {
    return parseInt(userInput.value);
}

/**
 * 
 * @param {+} operator 
 * @param {*} resultBerforeCalc 
 * @param {*} userEnteredNumber 
 * 
 * Generate and write log 
 */
function createAndWriteOutput(operator, resultBerforeCalc, userEnteredNumber) {
    const calculationDescription = `${resultBerforeCalc} ${operator} ${userEnteredNumber}`;
    outputResult(currentResult, calculationDescription); //loding form vendor file
}

function writeLog(operationIdentifier, prevResult, userEnteredNumber, finalResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevRes: prevResult,
        userInput: userEnteredNumber,
        result: finalResult,
    }
    logEntries.push(userEnteredNumber);
    console.log(logEntry);
}

function calculateResult(calcType) {
    if (
        calcType !== 'ADD' &&
        calcType !== 'SUBTRACT' &&
        calcType !== 'MULTIPLY' &&
        calcType !== 'DIVIDE'

    ) {
        return;
    }

    //another way to check using or || logical operator
    // if (
    //     calcType === 'ADD' ||
    //     calcType === 'SUBTRACT' ||
    //     calcType === 'MULTIPLY' ||
    //     calcType === 'DIVIDE'
    // ) {

    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calcType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calcType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calcType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calcType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeLog(calcType, initialResult, enteredNumber, currentResult);
    // }
}

function addition() {
    calculateResult('ADD');
}

function subtraction() {
    calculateResult('SUBTRACT');
}

function multiplication() {
    calculateResult('MULTIPLY');
}

function division() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', division);