async function prueba() {
    let exito = true;

    let promesa = new Promise((resolve, reject) => {
        if (exito) {
            resolve("¡Operación exitosa!");
        } else {
            reject("Algo salió mal");
        }
    });

    try {
        let resultado = await promesa;
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

prueba();

////////////////////////
async function suma() {
    let suma = 2 + 2
    let promesa = new Promise((resolve, reject) => {
        if (suma = 4) {
            resolve("Correcto")
        } else {
            reject("Error")
        }
    })

    try {
        let solucion = await promesa
        console.log(solucion)
    } catch (error) {
        console.log(error)
    }
}
suma()

////////////////////////
function tarea1() {
    return new Promise(resolve => {
        resolve("Tarea 1 completada")
    })
}

function tarea2() {
    return new Promise(resolve => {
        resolve("Tarea 2 completada")
    })
}

Promise.all([tarea1(), tarea2()])
    .then(resultados => {
        console.log(resultados)
    })
    .catch(error => {
        console.log(error)
    })


////////////////////////
function tarea3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Tarea 3 completada")
        }), 1000
    }
    )
}
function tarea4() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Tarea 4 completada")
        }), 2000
    })
}

async function ejecutarTareas() {
    try {
        const resultados2 = await Promise.all([tarea3(), tarea4()])
        console.log(resultados2)
    } catch (error) {
        conosole.log(error)
    }
}
ejecutarTareas()

////////////////////////
function obtenerUsuarios() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, nombre: 'Juan' },
                { id: 2, nombre: 'Ana' },
                { id: 3, nombre: 'Pedro' }
            ])
        }, 2000)
    })
}

function obtenerDetallesUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarios = [
                { id: 1, nombre: 'Juan' },
                { id: 2, nombre: 'Ana' },
                { id: 3, nombre: 'Pedro' }
            ]
            const usuario = usuarios.find(u => u.id === id)

            if (usuario) {
                console.log(usuario)
            } else {
                console.log("usuario no encontrado")
            }
        })
    })
}

async function obtenerDetallesDeUnUsuario(id) {
    try {
        const usuarios = await obtenerUsuarios()
        const usuario = usuarios.find(u => u.id === id)

        if (!usuario) {
            console.log("Error")
            return
        }
        const detalles = await obtenerDetallesUsuario(usuario.id)
        console.log(detalles)
    } catch {
        console.log("Error al obtener los datos")
    }
}
obtenerDetallesDeUnUsuario(1) //filter by id

//////////////////////// w/callback
const doAsyncWithCallback = (num3, num4, callback) => {
    const result2 = num3 + num4
    return setTimeout(() => {
        callback(result2)
    })
}
doAsyncWithCallback(5, 7, (result2) => {
    console.log(result)
})

//////////////////////// w/promises
const doAsyncWithPromises = (num1, num2) => {
    const result = num1 + num2
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resultado)
        }, 500)
    })
}

doAsyncWithPromises(2, 4)
    .then(result => console.log(result))


///success
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true
        if (exito) {
            resolve("exito")
        } else {
            reject("fallo")
        }
    }, 3000)
})
promesa
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.error(error)
    })


////error
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito2 = false
        if (exito2) {
            resolve("exito")
        } else {
            reject("fallo")
        }
    })
})
promesa2
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.error(error)
    })


///
const miPromesa = new Promise((resolve) => {
    setTimeout(() => resolve("Resultado de la promesa"), 2000);
});

async function manejarPromesa() {
    const resultado = await miPromesa;
    console.log(resultado);
}
manejarPromesa();

///
const promesa4 = new Promise((resolve) => setTimeout(() => resolve("Promesa 4"), 1000));
const promesa5 = new Promise((resolve) => setTimeout(() => resolve("Promesa 5"), 2000));
const promesa6 = new Promise((resolve) => setTimeout(() => resolve("Promesa 6"), 3000));

async function manejarPromesas() {
    const resultado4 = await promesa4;
    const resultado5 = await promesa5;
    const resultado6 = await promesa6;
    console.log(resultado4);
    console.log(resultado5);
    console.log(resultado6);
}

manejarPromesas();

///promise all
Promise.all([promesa4, promesa5, promesa6])
    .then((resultados) => console.log(resultados))



