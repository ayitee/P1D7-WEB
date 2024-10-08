function map(elements, modifier) {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    result.push(modifier(elements[i]));
  }
  return result;
}

// Takes an array of elements and a callback function 'modifier'.
// Creates an empty array 'result' to hold the modified elements.
// Iterates through 'elements' with a 'for' loop, applying 'modifier' to each element.
// Pushes the modified elements into the 'result' array.
// Returns the 'result' array with all modified elements.
