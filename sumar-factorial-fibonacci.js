// Este ejercicio consta de 3 funciones, factorial(n) recibe el número del cual se desea calcular el Factorial
// fibonacci(n) recibe el número hasta el cual desea recibir un array con su sucesión de Fibonacci
// sumarFactorialFibonacci(valFact, valFib) recibe como 1er parámetro el valor de factorial(n)
// y como 2do parámetro el valor de fibonacci(n) y retorna la suma de ambos resultados

function factorial (n) {
    if (typeof n !== 'number' || n < 0) return `${n} debe ser un número positivo`
    let resultFact = 1
    for (let i = 1; i <= n; i++) {
      resultFact *= i
    }
    
    return resultFact
  }
  
  //factorial(5)
  
  function fibonacci (n) {
    if (n === 0) return [0]
    if (n === 1) return [0, 1]
    if (typeof n !== 'number') return `${n} no es un número`
    if (n < 0) return `${n} no puede ser negativo`
    
    let resultFibonacci = 0,
        valorUltimo = 1,
        valorPenultimo = 0,
        arrayFibonacci = []
    
    while (resultFibonacci < n) {
      resultFibonacci = valorUltimo + valorPenultimo
      valorPenultimo = valorUltimo
      valorUltimo = resultFibonacci
      arrayFibonacci.push(resultFibonacci)
    }
    
    (resultFibonacci <= n) ? arrayFibonacci : arrayFibonacci.pop()
    
    return  arrayFibonacci
  }
  
  //fibonacci(5)
  
  function sumarFactorialFibonacci (valFact = 1, valFib = 1) {
    if (typeof valFact !== 'number' || valFact < 0) return `${valFact} debe ser un número positivo`
    if (typeof valFib !== 'number' || valFib < 0) return `${valFib} debe ser un número positivo`
    
    let fact = factorial(valFact),
        fib = fibonacci(valFib),
        resultFib = 0
    
    fib.forEach(el => {
      if (typeof el !== 'number') return
      resultFib += el
    })
    
    return `El factorial de ${valFact} es: ${fact}\nEl total de la suma de la sucesión de fibonacci hasta ${valFib} es: ${resultFib}\nLa suma de ambos valores es: ${fact + resultFib}`
  }
  
  //sumarFactorialFibonacci(2, -7)
  //sumarFactorialFibonacci(-2, 7)
  //sumarFactorialFibonacci({}, 7)
  //sumarFactorialFibonacci(2, [])
  //sumarFactorialFibonacci(2, "7")