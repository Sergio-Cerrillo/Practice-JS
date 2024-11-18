//SOME (true si alguno)   //EVERY (true si todos)

////COMPRUEBA SI HAY NEGATIVOS
const numeros1 = [1, 2, -3, 4]
const checkNeg = numeros1.some(numero => numero < 0)
console.log(checkNeg)


////COMPRUEBA SI HAY NUM PAR
const numeros2 = [1, 3, 5, 7]
const checkPar = numeros2.some(numero => numero % 2 == 0)
console.log(checkPar)

////COMPRUEBA SI HAY ALGUN TRUE
const usuarios = [
    { nombre: "Juan", activo: false },
    { nombre: "Ana", activo: true },
    { nombre: "Carlos", activo: false }
]
const checkTrue = usuarios.some(usuario => usuario.activo == true)
console.log(checkTrue)

////COMPROBAR SI ALGUIEN TIENE MAS DE 1K FOLLOWERS
const usuarios2 = [
    { nombre: "Juan", seguidores: 500 },
    { nombre: "Ana", seguidores: 1500 },
    { nombre: "Carlos", seguidores: 700 }
]

const chechFollowers = usuarios2.some(usuario => usuario.seguidores > 1000)
console.log(chechFollowers)

////COMPROBAR SI ALGUN ELEMENTO TIENE MÁS DE 10 CARACTERES
const frutas = ["manzana", "plátano", "fresasuperlonga", "cereza"]

const chechFruta = frutas.some(fruta => fruta.length > 10)
console.log(chechFruta)