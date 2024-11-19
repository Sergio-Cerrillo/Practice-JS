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

////first with >10char
const frutas = ["manzana", "plátano", "fresasuperlonga", "cereza"]
const checkFrutas = frutas.find(fruta => fruta.length > 10)
console.log(checkFrutas)

////find first > 10
const numbers6 = [1, 5, 10, 15, 20];

const mayor2 = numbers6.find(num => num > 10)
console.log(mayor2)


////first name starts w"A"
const names3 = ['Carlos', 'Ana', 'Pedro', 'Lucía'];

const inicial = names3.find(name => name.charAt(0) === "A")
console.log(inicial)

////first id>100
const items = [
    { id: 50, name: 'item1' },
    { id: 120, name: 'item2' },
    { id: 85, name: 'item3' }
];
const itemMayor = items.find(item => item.id > 100)
console.log(itemMayor)
