// Ejercicio 1: Tu primer test con Vitest
//
// Descripción:
// Vas a escribir tests para la función saludar() que ya conoces.
// Esta función recibe un nombre y devuelve un saludo.
//
// Instrucciones:
// 1. Importa las funciones necesarias de vitest con:
//    import { expect, test } from 'vitest'
//
// 2. Importa la función a testear con:
//    import { saludar } from '../funciones/ejercicio1'
//
// 3. Escribe al menos 3 tests diferentes:
//    - Test con un nombre normal
//    - Test con un nombre vacío
//    - Test con un nombre de un solo carácter
//
// Ejemplo de un test:
// test('descripción del test', () => {
//    expect(saludar('Ana')).toBe('¡Hola, Ana!');
// });

// Escribe tus tests aquí:
import { expect, test } from "vitest";

import { saludar } from "../functions/ejercicio1.js";

test("saludar con un nombre normal", () => {
  expect(saludar("Ana")).toBe("¡Hola, Ana!");
});

test("saludar con un nombre vacío", () => {
  expect(saludar("")).toBe("¡Hola, !");
});

test("saludar con un nombre de un solo carácter", () => {
  expect(saludar("A")).toBe("¡Hola, A!");
});
