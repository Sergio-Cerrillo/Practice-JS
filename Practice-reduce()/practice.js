//Reduce
////TOTAL
const numeros = [1, 2, 3, 4, 5]

function total(array) {
    return array.reduce((acumulador, numActual) => acumulador + numActual, 0)
}
console.log(total(numeros))

////MULTIPLICAR NUMEROS DE ARRAY
const numeros2 = [1, 2, 3, 4]

function total2(array) {
    return array.reduce((acumulador, numActual) => acumulador * numActual, 1) //si empieza por 0, multiplicaria por 0
}
console.log(total2(numeros2))

////CONTAR OCURRENCIAS DE UN VALOR (1)
const numeros3 = [1, 2, 3, 1, 4, 1, 5]

function total3(array) {
    return array.reduce((acumulador, valorActual) => {
        if (valorActual === 1) { acumulador++ }
        return acumulador
    })
}
console.log(total3(numeros3))

////ENCONTRAR VALOR MÁXIMO ***
const numeros4 = [1, 2, 3, 7, 4, 9, 5]

function total4(array) {
    return array.reduce((acumulador, valorActual) =>
        (valorActual > acumulador ? valorActual : acumulador), array[0]
    )
}
console.log(total4(numeros4))

////AGRUPAR ELEMENTOS POR TIPO
const numeros5 = [1, "hola", true, 2, "adiós", { name: "Juan" }, 3]

function total5(array) {
    return array.reduce((acumulador, valorActual) => {
        const tipo = typeof valorActual

        if (!acumulador[tipo]) acumulador[tipo] = []

        acumulador[tipo].push(valorActual)

        return acumulador
    }, {})
}
console.log(total5(numeros5))

////APLANAR ARRAY DE ARRAYS
const numeros6 = [[1, 2], [3, 4], [5, 6]]

function total6(array) {
    return array.reduce((acumulador, valorActual) =>
        acumulador.concat(valorActual), []
    )
}
console.log(total6(numeros6))

////LISTA DE NOMBRES DE USUARIOS
const numeros7 = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Carlos' }
]
function total7(array) {
    return array.reduce((acumulador, valorActual) => {
        acumulador.push(valorActual.nombre)
        return acumulador
    }, []
    )
}
console.log(total7(numeros7))

////add
const numbers4 = [2, 5, 8, 10]

function suma(array) {
    return array.reduce((acumulador, valorActual) =>
        acumulador + valorActual
        , 0)
}
console.log(suma(numbers4))

///mult numbers4
function multi(array) {
    return array.reduce((acumulador, valorActual) =>
        acumulador * valorActual)
}
console.log(multi(numbers4))

///find biggest
const numbers5 = [12, 45, 23, 67, 34]

function mayor(array) {
    return array.reduce((acumulador, valorActual) => {
        if (valorActual > acumulador) {
            acumulador = valorActual
        }
        return acumulador
    }, 0)

}
console.log(mayor(numbers5))
