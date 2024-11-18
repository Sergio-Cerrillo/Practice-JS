///EVERY (todos cumplen) ////SOME (alguno)

////COMPRUEBA QUE TODOS SON POSITIVOS
const numeros1 = [1, 2, 3, 4]
const checkPositive = numeros1.every(numero => numero > 0)
console.log(checkPositive)

////COMPRUEBA QUE TODOS SON ADULTOS
const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 15 },
    { nombre: "Carlos", edad: 30 }
];
const checkAdult = personas.every(persona => persona.edad > 17)
console.log(checkAdult)

////VERIFICAR QUE TODOS ESTAN DISPONIBLES
const productos = [
    { nombre: "Laptop", stock: 10 },
    { nombre: "Smartphone", stock: 5 },
    { nombre: "Tablet", stock: 2 }
];
const checkStock = productos.every(producto => producto.stock > 0)
console.log(checkStock)

////VERIFICAR QUE TODOS TIENE MAS DE 3 CARACTERES
const palabras = ["manzana", "plátano", "f", "cereza"]
const checkPalabras = palabras.every(palabra => palabra.length > 3)
console.log(checkPalabras)

////VERIFICAR QUE TODOS LOS USUARIOS ESTAN ACTIVOS
const usuarios = [
    { nombre: "Juan", activo: true },
    { nombre: "Ana", activo: true },
    { nombre: "Carlos", activo: true }
];
const checkUsers = usuarios.every(usuario => usuario.activo == true)
console.log(checkUsers)