function fibonacci(numero) {
  console.log('Funcionalidad extra Josuá Reyes - Carné 09062027370')
  if (numero <= 1) {
    return numero;
  } else {
    return fibonacci(numero - 1) + fibonacci(numero - 2);
  }
}

function numeroPrimo(n) {
  console.log('Funcionalidad extra Josuá Reyes - Carné 09062027370')
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(b); i++) {
    if (b % i === 0) {
      isPrime = false;
      break;
    }
  }
  
  return isPrime;
}