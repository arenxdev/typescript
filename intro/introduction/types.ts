let a = 'hola'
a = 'Holas'
a = 2

let b: number = 10
b = 20
b = a
const num1 = 10
const num2 = 20
b = num1 + num2

function suma(numa: number, numb: number): number {
  return numa + numb + 'hola'
}

suma(1, 2)

type dni = string | number
let dniNumber:dni = 2013
let dniString = '10100'