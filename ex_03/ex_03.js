function map(elements, modifier) {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    result.push(modifier(elements[i]));
  }
  return result;
}

// Exemple de test
function isEven(number) {
  return number % 2 === 0;
}

console.log(map([5, 8, 10], isEven)); // Devrait afficher [false, true, true]

/*
Explications :
1. La fonction `map(elements, modifier)` prend deux arguments :
   - `elements` : un tableau d'éléments à transformer.
   - `modifier` : une fonction de callback qui est appliquée à chaque élément du tableau.
2. Un tableau `result` est créé pour stocker les éléments modifiés.
3. Une boucle `for` est utilisée pour parcourir chaque élément de `elements` et appliquer la fonction `modifier`.
4. Le résultat de `modifier` est ajouté au tableau `result`.
5. La fonction renvoie le tableau `result` contenant les éléments modifiés.
*/
