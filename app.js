import express from "express"
import {config} from "dotenv"

config ()


const SERVER_PORT = process.env.PORT

let app = express ()


app.get ("/", (req, res) => {
    console.log ("Accediendo a la ruta /")

    res.send ("Bienvenidos a la ruta principal")
})


app.get ("/usuarios", (req, res) => {
    console.log ("Accediendo a la ruta /usuarios")
    res.send ("Mostrando Usuarios....")
})


app.post ("/usuario", (req, res) => {
    console.log ("Creando usuario....")

    const {nombre, contrasenia} = req.body

    console.log ("Nombre del usuario creado "+nombre+" junto con su contraseña "+contrasenia)
})


app.listen (SERVER_PORT, ()=> console.log ("Servidor inicializado en el puerto "+SERVER_PORT))