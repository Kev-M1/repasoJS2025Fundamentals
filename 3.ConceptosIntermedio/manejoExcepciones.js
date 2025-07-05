//Crear una función que permita dividir 2 numeros, debe emplearse manejo de excepciones y validaciones para anticiparse a posibles errores



function divida(numerador, denominador) {
  if (denominador == 0) {
    throw new Error("No es posible dividir entre 0, Ingrese en denominador diferente de 0");
  }
  return (numerador / denominador);
}


try {
  console.log(divida(5, 0));
} catch (error) {
  console.log(error.message);
}