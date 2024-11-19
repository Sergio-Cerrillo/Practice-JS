//SOME (true si alguno)   //EVERY (true si todos)

////check there are negative
const numeros1 = [1, 2, -3, 4]
const checkNeg = numeros1.some(numero => numero < 0)
console.log(checkNeg)


////check even number
const numeros2 = [1, 3, 5, 7]
const checkPar = numeros2.some(numero => numero % 2 == 0)
console.log(checkPar)

////check TRUE
const usuarios = [
    { nombre: "Juan", activo: false },
    { nombre: "Ana", activo: true },
    { nombre: "Carlos", activo: false }
]
const checkTrue = usuarios.some(usuario => usuario.activo == true)
console.log(checkTrue)

////check >1000 followers
const usuarios2 = [
    { nombre: "Juan", seguidores: 500 },
    { nombre: "Ana", seguidores: 1500 },
    { nombre: "Carlos", seguidores: 700 }
]

const chechFollowers = usuarios2.some(usuario => usuario.seguidores > 1000)
console.log(chechFollowers)

////check >10 characteres
const frutas = ["manzana", "plátano", "fresasuperlonga", "cereza"]

const chechFruta = frutas.some(fruta => fruta.length > 10)
console.log(chechFruta)

///check >15
const numbers7 = [4, 12, 16, 9, 7]
const itemMayor2 = numbers7.some(num => num > 15)
console.log(itemMayor2)


///check names3 any name with "A"
const busqueda = "a"

const nameContent = names3.some(name => name.includes(busqueda))

console.log(nameContent)

///check odd number > 10
const numbers8 = [2, 4, 6, 8, 11, 13, 20];

const impMayor = numbers8.some(num => (num % 2 != 0) && (num > 10))
console.log(impMayor)
