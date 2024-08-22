// Función que solicita al usuario un número y verifica si está en el rango de 1 a 20
const numeroSolicitado = () => {
    // Solicita al usuario que ingrese un número entre 1 y 20
    let numero = prompt("ingrese un numero entre 1 y 20");
    
    // Convierte el valor ingresado de cadena a número entero
    numero = parseInt(numero);

    // Verifica si el número está en el rango de 1 a 20
    if (numero >= 1 && numero <= 20) {
      // Llama a la función para calcular el factorial si el número es válido
      calculoFactorial(numero);
    } else {
      // Muestra un mensaje en la consola si el número no está en el rango
      console.log("ingrese un numero solamente entre 1 y 20");
    }
  };

  // Función que calcula y muestra el factorial de cada número desde 1 hasta el número ingresado
  const calculoFactorial = (num) => {
    // Recorre los números desde 1 hasta el número ingresado
    for (let i = 1; i <= num; i++) {
      // Inicializa la variable factorial a 1 para cada número i
      let factorial = 1;
      
      // Muestra en la consola el resultado de multiplicar i por el número ingresado
      console.log(`${i} x ${num} = ${i * num}`);
      
      // Calcula el factorial del número i
      for (let j = 1; j <= i; j++) {
        factorial *= j; // Multiplica factorial por j en cada iteración
      }
      
      // Muestra en la consola el factorial calculado para el número i
      console.log(`el factorial de ${i} es: ${factorial}`);
    }
  };

  // Agrega un event listener al botón para ejecutar la función numeroSolicitado al hacer click
  document.getElementById('calcularButton').addEventListener('click', numeroSolicitado);
