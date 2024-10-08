function findClosestResult(functionsObj, inputNumber, outputNumber) {
  let closestFunctionName = null;
  let smallestDifference = Infinity;

  for (const [functionName, func] of Object.entries(functionsObj)) {
    const result = func(inputNumber);
    const difference = Math.abs(result - outputNumber);

    if (difference < smallestDifference) {
      smallestDifference = difference;
      closestFunctionName = functionName;
    }
  }

  return closestFunctionName;
}

/*
1. Takes an object of functions, an input number, and a target output number.
2. For each function, calculates the absolute difference between its result (on 'inputNumber') and 'outputNumber'.
3. Returns the function name with the smallest difference to 'outputNumber'.
*/
