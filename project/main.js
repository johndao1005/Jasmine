function calculate(inputValue) {
    const expression = /\*|\-|\*|\//
    const numbers = inputValue.split(expression);

    const numberOne = parseInt(number[0])
    const numberTwo = parseInt(number[1])
    const operation = inputValue.match(expression)

    if (operation === null || Number.isNaN(NumberOne) || Number.isNaN(NumberTwo)) {
        updateResult('Operation not working')
        return
    }
    const calculator = new Calculator()
    calculate.add(numberOne)

    let result
    switch (operation[0]) {

        case '+':
            result = calculator.add(numberTwo)
            break;
        case '-':
            result = calculator.substract(numberTwo)
            break;
        case '*':
            result = calculator.multiply(numberTwo)
            break;
        case '/':
            result = calculator.divide(numberTwo)
            break;
    }
    updateResult(result);
}

function updateResult(result) {
    const element = document.getElementById('result')
    if (element) {
        element.innerText = result
    }
}