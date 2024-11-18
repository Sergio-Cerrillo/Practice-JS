
//print double
const numbers = [1, 2, 3, 4, 5]

const double = numbers.map((numbers) => numbers * 2)
console.log(double)

//toUpperCase
const words = ["hello", "world", "javascript"]

const mayus = words.map((words) => words.toUpperCase())

console.log(mayus)

//.length
const words2 = ["apple", "banana", "cherry"]

const longitud = words2.map((words2) => words2.length)

console.log(longitud)

//age +1
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const people1 = people.map((people) => people.age + 1)
console.log(people1)

//old>10
const numbers2 = [5, 15, 20, 8, 3, 12];

const mayor = numbers2.map((numbers2) => numbers2 > 10)
console.log(mayor)

//titles
const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "Moby Dick", author: "Herman Melville" }
];
const titles = books.map((books) => books.title)
console.log(titles)

//add pricedDiscount
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Tablet", price: 300 }
];

const productComplet = products.map((products) => [{ "name": products.name, "price": products.price, "pricedDiscount": (products.price * 0.9) }])
console.log(productComplet)

//index with value
const numbers3 = [10, 20, 30]
const result = numbers3.map((x) => ({
  value: x,
  index: numbers3.findIndex((y) => y === x)
}))

console.log(result)


//ej bookings

const hotelReservations = [
  {
    reservationId: "R001",
    hotelName: "Hotel Playa del Sol",
    customerName: "Ana García",
    checkInDate: "2024-12-01",
    checkOutDate: "2024-12-07",
    numberOfGuests: 2,
    roomType: "Suite",
    pricePerNight: 150,
  },
  {
    reservationId: "R002",
    hotelName: "Grand Palace Hotel",
    customerName: "Juan Pérez",
    checkInDate: "2024-12-05",
    checkOutDate: "2024-12-10",
    numberOfGuests: 4,
    roomType: "Deluxe",
    pricePerNight: 250,
  },
  {
    reservationId: "R003",
    hotelName: "Hotel Montaña Verde",
    customerName: "Luis Martínez",
    checkInDate: "2024-11-15",
    checkOutDate: "2024-11-20",
    numberOfGuests: 1,
    roomType: "Standard",
    pricePerNight: 100,
  },
  {
    reservationId: "R004",
    hotelName: "Resort Dreams",
    customerName: "Carlos Ruiz",
    checkInDate: "2024-12-10",
    checkOutDate: "2024-12-15",
    numberOfGuests: 3,
    roomType: "Family Suite",
    pricePerNight: 200,
  },
  {
    reservationId: "R005",
    hotelName: "Hotel Vista Hermosa",
    customerName: "Marta Fernández",
    checkInDate: "2024-12-20",
    checkOutDate: "2024-12-25",
    numberOfGuests: 2,
    roomType: "Double",
    pricePerNight: 120,
  }
];

//obtain name
const searchName = hotelReservations.map(hotel => hotel.hotelName)

console.log(searchName)


//obtain total price
const priceReserves =
  hotelReservations.map(
    ({ hotelName, numberOfGuests, pricePerNight }) => ({
      hotel: hotelName,
      precio: numberOfGuests * pricePerNight
    })
  )
console.log(priceReserves)


//obtener nombres de los clientes y su tipo de habitación
const nameHabit =
  hotelReservations.map(
    ({ customerName, roomType }) => ({
      cliente: customerName,
      habitacion: roomType
    })
  )
console.log(nameHabit)

//add 10%
const aumentReserve =
  hotelReservations.map(
    ({ reservationId, pricePerNight }) => ({
      id: reservationId,
      priceAument: pricePerNight * 1.1
    })
  )
console.log(aumentReserve)

//format to DD/MM/YYYY
const newDates =
  hotelReservations.map(
    ({ reservationId, checkInDate, checkOutDate }) => ({
      reserve: reservationId,
      finalIn: new Date(checkInDate).toLocaleDateString(),
      finalOut: new Date(checkOutDate).toLocaleDateString()
    })
  )

console.log(newDates)


//filter >2 guests
const reserve2 =
  hotelReservations.filter(
    ({ numberOfGuests }) => numberOfGuests > 2).map(
      ({ reservationId, numberOfGuests }) => ({
        reserve: reservationId,
        numberPeople: numberOfGuests > 2
      })
    )

console.log(reserve2)

//guests/hotel
const huespHotel =
  hotelReservations.map(
    ({ hotelName, numberOfGuests }) => ({
      hotel: hotelName,
      huespedesTotal: numberOfGuests
    })
  )
console.log(huespHotel)


//guests with suite
const huespVip =
  hotelReservations.filter(({ roomType }) => roomType === "Suite").map(
    ({ reservationId, roomType }) => ({
      reserva: reservationId,
      habitacion: roomType
    })
  )
console.log(huespVip)

//////////////////
const employees = [
  { name: "Juan", address: { street: "Av. Siempre Viva", city: "Springfield" } },
  { name: "Ana", address: { street: "Calle Falsa", city: "Shelbyville" } },
  { name: "Carlos", address: { street: "Calle 123", city: "Capital City" } },
];

//simplify adress
const newEmployees =
  employees.map(
    ({ name, address: { street, city } }) => ({
      newName: name,
      newAdress: `${street},${city}`
    })
  )
console.log(newEmployees)



///////////////////

const sales = [
  { product: "Laptop", quantity: 5 },
  { product: "Smartphone", quantity: 10 },
  { product: "Tablet", quantity: 7 },
];

//total quantity
const quantities = sales.map(item => item.quantity)
const totalQuantity = quantities.reduce((total, quantity) => total + quantity)
console.log(totalQuantity)


///////////////////

const users = [
  { firstName: "Juan", lastName: "Pérez" },
  { firstName: "Ana", lastName: "García" },
  { firstName: "Carlos", lastName: "Ruiz" },
  { firstName: "Marta", lastName: "Fernández" },
];

//only name
const names =
  users.map(
    ({ firstName }) => ({
      newName: firstName
    })
  )
console.log(names)


///////////////////
const numeros = [2, 4, 6, 8, 10];
//x*x
const cuadrado =
  numeros.map(
    (numeros => numeros * numeros)
  )
console.log(cuadrado)

///////////////////
const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 }
];
//price with IVA
const productosIva =
  productos.map(
    ({ nombre, precio }) => ({
      nombre: nombre,
      precioIva: precio * 1.21
    })
  )
console.log(productosIva)

///////////////////
const fechas = ["2023-10-10", "2024-01-01", "2023-07-15"];
//format to DD/MM/YYYY
const newDates1 =
  fechas.map(
    (fecha => {
      const formated = new Date(fecha).toLocaleDateString("es-EN")
      return formated

    })
  )
console.log(newDates1)

///////////////////
const personas = [
  { nombre: "Juan", genero: "masculino" },
  { nombre: "María", genero: "femenino" },
  { nombre: "Pedro", genero: "masculino" },
  { nombre: "Ana", genero: "femenino" },
  { nombre: "Luis", genero: "masculino" }
];

const saludo =
  personas.map(persona => {
    const saludo = persona.genero === "masculino" ? "Sr" : "Sra"

    return {
      saludo: saludo,
      ...persona
    }
  }
  )
console.log(saludo)

///////////////////
const personasYear = [
  { nombre: "Juan", nacimiento: 1990 },
  { nombre: "María", nacimiento: 1985 },
  { nombre: "Pedro", nacimiento: 2000 },
  { nombre: "Ana", nacimiento: 1995 },
  { nombre: "Luis", nacimiento: 1992 }
];
//age
const year = new Date().getFullYear()
const personasAge =
  personasYear.map(
    ({ nombre, nacimiento }) => ({
      nombre: nombre,
      age: year - nacimiento
    })
  )
console.log(personasAge)


///////////////////
const libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez" },
  { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón" },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury" }
];
//change to array of strings
const arrString =
  libros.map(
    libro => `${libro.titulo}-${libro.autor}`
  )
console.log(arrString)

///////////////////
//Fahrenheit = (Celsius * 9/5) + 32
const temperaturasCelsius = [0, 10, 20, 30, 40];

//from celsius to fahrenheit
const faren = temperaturasCelsius.map(tem => (tem * 9 / 5) + 32)

console.log(faren)












