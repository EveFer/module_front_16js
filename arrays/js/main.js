// Crear una funcion que solicite al usuario el numero de nombres a ingresar y agregarlos a un arreglo
// imprimir el arreglo

const arrayNames = ["Paco", "Vryhan", "Aldahir"]

// for (let index = 0; index < arrayNames.length; index++) {
//     console.log(`koder ${index + 1}: ${arrayNames[index]}`)
// }

// metodos de array
/*
.push()
Agrega uno o más items al final del array y devuelve la nueva longitud del arreglo
*/
console.log(arrayNames)

// array push
arrayNames.push('Victor','Fer', 'Erick')

console.log('Despues del push()')
console.log(arrayNames)


/*
.pop() Remueve el ultimo item del arreglo y devuelve el item removido
*/

arrayNames.pop()
console.log(arrayNames)

/*
.shift() Remueve el primer item del arreglo y devuelve el item removido
*/

arrayNames.shift()

console.log(arrayNames)

/*
.splice(index, howmany, items...,)
index -> Es el indice el item del arreglo
howmany -> Cuantos items se eliminaran apartir del index
items -> Se quiero agregar elementos
*/


// Metodos funcionales

// forEach

// const arrayNumbers = [2,4,5,6]

// arrayNumbers .forEach((number, index) => {
//     console.log(index, number)
//     console.log(number * 2)
// })

// 