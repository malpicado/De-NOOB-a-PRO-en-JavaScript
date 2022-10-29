/* Sumador de Números Pares e Impares de un Array */
// Esta función recibe como parámetro un arreglo de números y retorna la suma de los números pares e
// impares dentro del mismo

function sumarParesImpares(array) {
    if (!(array instanceof Array)) return `Debe ingresar un arreglo de números`;
  
    let pares = array.filter((n) => n % 2 === 0);
    let resultPares = 0;
  
    pares.forEach((el) => {
      if (typeof el !== "number") return console.error(`${el} no es un número`);
      resultPares += el;
    });
  
    let impares = array.filter((n) => n % 2 === 1);
    let resultImpares = 0;
  
    impares.forEach((el) => {
      if (typeof el !== "number")
        return console.error(
          `${el} no es un número, por lo tanto se excluirá de la suma`
        );
      resultImpares += el;
    });
  
    return `La suma de todos los números impares del arreglo es: ${resultImpares}\n La suma de todos los números pares del arreglo es: ${resultPares}`;
  }
  
  // A continuación algunas líneas para que puedan probar el código y sus validaciones
  //sumarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  //sumarParesImpares(["1", 2, 3, 4, 5, 6, 7, 8, 9, 10])
  //sumarParesImpares([{}, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  //sumarParesImpares([1, 2, 3, 4, [], 6, 7, 8, 9, 10])