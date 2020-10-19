
// // arreglo, o array
// // entre corchetes, valores separados por coma. 
// let nombres = [ "Ana", "Elsa", "Angie", "Maca", "Sol" ]

// // datos primitivos
// // strings
// // booleanos
// // numeros 

// // arrays son un tipo de dato

// // para acceder a los valores de un array podemos hacerlo uno por uno
// nombres[0] // "Ana"

// // si lo quiero mostrar en consola
// console.log(nombres[0])
// // tb lo puedo guardar en una variable
// let nombreAna = nombres[0]
// let mensaje = `El nombre de la primera alumna en el array es ${nombre[0]}`
// console.log(mensaje)

// // Para saber la lngitud de un array
// nombres.length // --> propiedad de los array --> ES UN NUMERO. 

// // el for 
// // estructura de control, estructura de repeticion
// // ejecutar el mismo codigo muchas veces

// // manera clasica

// // donde "array" es el nombre de algun array que tengamos definidos
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

// // manera abreviada
// for (let elemento of array) {
//   console.log(elemento)
// }


// 1 Dado un array de 10 numeros, informar cuantos de ellos son positivos

// const arrayDeNumeros = [0, 3, -5, -9, -2, 2, 5, 4, 8, -6]

// let contador = 0
// for (let numero of arrayDeNumeros) {
//   if (numero >= 0) {
//     contador++   
//   }
// }


// Cuando trabajamos en una funcion que dentro tiene un for, debemos tener cuidado con el return
// El return INTERRUMPE la ejecucion del for: no se va a recorrer todo el array

// Dado un array de numeros, hacer una funcion que retorne true si al menos uno de ellos es negativo
// o false si ninguno de ellos lo es 
// const arrayDeNumeros = [3, 2, 5, -4, 8, 6]

// const hayAlgunNumeroNegativo = (array) => {

//   for (let numero of array) {
//     console.log('estamos en', numero)
//     if (numero <= 0) {
//       return true
//     }
//   }
//   // solo se ejecuta el codigo de aca abajo si no hay ningun numero negativo
//   // debo retornar false si no hay ningun numero negativo
//   return false 
// }

// console.log(hayAlgunNumeroNegativo(arrayDeNumeros))



const arrayBidimensional = [ 
  ["malena", "caro", "angie"], 
  [   33,       26,      19], 
  ["caba",   "caba",   "caba"] 
]

console.log(arrayBidimensional[1][2]) //   "angie"

const arrayUnidimensional = [
  "malena", 
  "caro", 
  "angie"
]

console.log(arrayUnidimensional[0]) // "malena"

// primera regla:
// para acceder a un elemento dentro de un array escribimos el nombre del array + la posicion del elemento
// 
