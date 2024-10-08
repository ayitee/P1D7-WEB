
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
Explications :
1. La fonction 'findClosestResult(functionsObj, inputNumber, outputNumber)` prend un objet de fonctions, un nombre en entrée, et un nombre cible.
2. Pour chaque fonction de 'functionsObj', on calcule la différence absolue entre le résultat de la fonction ('appliquée à `inputNumber') et 'outputNumber'.
3. La fonction retourne le nom de la fonction qui produit la valeur la plus proche de 'outputNumber'.
*/
