export function notANumber(value) {
  return isNaN(value) || value == ""

  
}

/* função de cálculo do IMC */

export function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

// função calcular peso/ altura 