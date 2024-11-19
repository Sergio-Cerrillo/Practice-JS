///EVERY (todos cumplen) ////SOME (alguno)

////all positive
const numeros1 = [1, 2, 3, 4]
const checkPositive = numeros1.every(numero => numero > 0)
console.log(checkPositive)

////all >18?
const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 15 },
    { nombre: "Carlos", edad: 30 }
];
const checkAdult = personas.every(persona => persona.edad > 17)
console.log(checkAdult)

////check active?
const productos = [
    { nombre: "Laptop", stock: 10 },
    { nombre: "Smartphone", stock: 5 },
    { nombre: "Tablet", stock: 2 }
];
const checkStock = productos.every(producto => producto.stock > 0)
console.log(checkStock)

////all >3char?
const palabras = ["manzana", "plátano", "f", "cereza"]
const checkPalabras = palabras.every(palabra => palabra.length > 3)
console.log(checkPalabras)

////all actives?
const usuarios = [
    { nombre: "Juan", activo: true },
    { nombre: "Ana", activo: true },
    { nombre: "Carlos", activo: true }
];
const checkUsers = usuarios.every(usuario => usuario.activo === true)
console.log(checkUsers)

////>0?
const numbers9 = [1, 2, 3, 4, 5];

const mayor3 = numbers9.every(num => num > 0)
console.log(mayor3)

///>3char?
const names4 = ['Carlos', 'Ana', 'Pedro', 'Sofía'];
const mas3 = names4.every(name => name.length > 3)
console.log(mas3)

///all even numbers?
const numbers10 = [2, 4, 6, 8, 9]
const par = numbers10.every(num => num % 2 === 0)
console.log(par)
