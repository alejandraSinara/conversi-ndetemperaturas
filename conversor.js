const prompt = require("prompt-sync")();

function conversor() {
  let valorEnCelsius;
  let entradaValida = false;
  
  // Validación de entrada
  while (!entradaValida) {
    const input = prompt("Ingrese el valor en Celsius que desea convertir: ");
    
    // Verificar si la entrada es un número válido
    if (input === null || input.trim() === "") {
      console.log("❌ Error: No se ingresó ningún valor. Por favor, intente nuevamente.\n");
      continue;
    }
    
    valorEnCelsius = Number(input);
    
    // Verificar si la conversión a número fue exitosa y no es NaN
    if (isNaN(valorEnCelsius)) {
      console.log("❌ Error: Por favor, ingrese un valor numérico válido.\n");
    } else {
      entradaValida = true;
    }
  }
  
  // Realizar las conversiones
  const valorEnFahrenheit = (valorEnCelsius * 9/5) + 32;
  const valorEnKelvin = valorEnCelsius + 273.15;
  
  // Mostrar resultados
  console.log(`\n✅ Resultados de la conversión:`);
  console.log(`El valor de ${valorEnCelsius}°C convertido a Fahrenheit es ${valorEnFahrenheit.toFixed(2)}°F`);
  console.log(`El valor de ${valorEnCelsius}°C convertido a Kelvin es ${valorEnKelvin.toFixed(2)}K`);
}

// Para usar la función, descomenta la siguiente línea:
conversor();