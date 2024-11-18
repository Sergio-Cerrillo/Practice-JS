//FIND (devuelve el primero) //FILTER (objeto con todos los filtrados)
///PRIMER NUMERO NEGATIVO
const numeros1 = [1, 2, -3, 4]
const checkNegative = numeros1.find(numero => numero < 0)
console.log(checkNegative)

////PRIMER OBJETO QUE SE LLAME ANA
const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Carlos" }
];
const checkAna = usuarios.find(usuario => usuario.nombre == "Ana")
console.log(checkAna)

////PRIMERA PERSONA QUE SEA MAYOR DE EDAD
const personas = [
    { nombre: "Juan", edad: 16 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 17 }
];
const checkAdult = personas.find(persona => persona.edad > 17)
console.log(checkAdult)

////PRIMER PRODUCTO CON STOCK DISPONIBLE
const productos = [
    { nombre: "Laptop", stock: 0 },
    { nombre: "Smartphone", stock: 5 },
    { nombre: "Tablet", stock: 2 }
];
const checkStock = productos.find(producto => producto.stock > 0)
console.log(checkStock)

////PRIMER STRING CON MAS DE 10 CARACTERES
const frutas = ["manzana", "plátano", "fresasuperlonga", "cereza"]
const checkFrutas = frutas.find(fruta => fruta.length > 10)
console.log(checkFrutas)
