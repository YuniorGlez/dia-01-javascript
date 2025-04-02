// Ejercicio 7: Función Operaciones
// Instrucciones:
// 1. Crea una función llamada `operacion` que tome tres parámetros:
//    - num1: primer número
//    - num2: segundo número
//    - operador: string con el operador ('+', '-', '*', '/')
// 2. Usa switch para realizar la operación correspondiente y retornar el resultado
// 3. Por ejemplo: operacion(4, 2, '+') debe retornar 6

// Escribe tu código aquí debajo:

function operacion(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "dividir por cero da infinito crack XD";
            }
        default:
            return "Operador inválido";
    }
}