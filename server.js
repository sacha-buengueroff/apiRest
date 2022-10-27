import express from 'express'
import { RouterClientes } from './router/clientes.js'
import CnxMongoDB from './model/DB.js'
import config from './config.js'

const app = express()
app.use(express.static('public')) // ofrece los recursos (archivos) de la carpeta public
// al poner en el navegador localhost:8080 esto me dirige a localhost:8080/index.html
app.use(express.json()) // permite que use JSON por body params
app.use(express.urlencoded({extended:true})) // permite que use urlencoded por body params


app.get('/ping', (req,res) => {
    res.send('pong')
})


/* --------------------------------------------------------------- */
/*           ZONA DE RUTAS MANEJADAS POR EL ROUTER                 */
/* --------------------------------------------------------------- */

app.use('/api/clientes', (new RouterClientes()).start()) // le agrego de ruta base api/clientes a todos los router

/* --------------------------------------------------------------- */
/*                         SERVIDOR LISTEN                         */
/* --------------------------------------------------------------- */

if(config.MODO_PERSISTENCIA == 'MONGO') {
    await CnxMongoDB.conectar()
}

const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
