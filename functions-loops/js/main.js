
// let num1 = 20
// // let num1 = "323"
// let num2 = 30

// let result = num1 + num2

// console.log(result)

// declarar la function  || parametros
function sumarDosNumeros(number1, number2) {
    const result = number1 + number2
    // console.log(result)
    return result
}

// invocar la function
// argumentos
let result1 = sumarDosNumeros(100, 50)
console.log('result1', result1) // 150
let result2 = sumarDosNumeros(200, 50)
console.log('result2', result2) // 250
let result3 = sumarDosNumeros(400, 50)
console.log('result3', result3) //450
let result4= sumarDosNumeros(600, 50)
console.log('result4', result4) //650

console.log('-------mayor que----------')

function evaluarSiEsMayor(num1, num2) {
    if(num1 > num2) {
        return `${num1} es mayor que ${num2}`
    }else if(num1 < num2) {
        return `${num1} es menor que ${num2}`
    }else {
        return 'Ambos numeros son iguales'
    }
}

let resultValidation = evaluarSiEsMayor(20, 50)
console.log(resultValidation)

console.log(evaluarSiEsMayor(20, 50))

const num1 = 20
const num2 = 40

function evaluarSiEsMayor2(num1, num2) {
    let result
    if(num1 > num2) {
        result = true
    }else {
        result = false
    }
    return result
}
console.log(evaluarSiEsMayor2(num1, num2)) 

// hoisting - elevación

