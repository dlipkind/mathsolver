document
  .querySelector("#equation-form")
  .addEventListener("submit", function () {
    event.preventDefault();
    let equation = this.elements.equation.value;
    let clearedArray = clear(equation);
    let solution = calculation(clearedArray);
    console.log(solution);
  });

function calculation(clearedArray) {
  console.log(clearedArray);
  for (let i = 0; clearedArray.length !== 1; i++) {
    if (clearedArray.includes(Array.from(orderOfExecution)[i])) {
      let operatorIndex = clearedArray.indexOf(Array.from(orderOfExecution)[i]);
      let answer = execution(
        clearedArray[operatorIndex - 1],
        clearedArray[operatorIndex + 1],
        clearedArray[operatorIndex]
      );
      clearedArray = update(operatorIndex, clearedArray, answer);
      i = -1;
    }
  }
  return (solution = clearedArray[0]);
}

const orderOfExecution = new Set(["*", "/", "+", "-"]);

function clear(equation) {
  const split = equation.match(/\d+|[\+\-\*\/]/g);
  return split;
}

function execution(number1, number2, symbol) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const result = operations[symbol]
    ? operations[symbol](Number(number1), Number(number2))
    : 0;

  console.log(result);
  return result;
}

function update(operatorIndex, clearedArray, answer) {
  clearedArray.splice(operatorIndex - 1, 3, answer);
  console.log(clearedArray);
  return clearedArray;
}
