import express from 'express'
import ControladorClientes from '../controller/clientes.js'


export class RouterClientes {
    
    constructor() {
        this.router = express.Router()
        this.controladorClientes = new ControladorClientes()
    }

    start() {
        /* GET Clientes */
        this.router.get('/:id?', this.controladorClientes.getClientes)
        /* POST Clientes */
        this.router.post('/', this.controladorClientes.postCliente)
        /* PUT Clientes */
        this.router.put('/:id', this.controladorClientes.putCliente)
        /* DELETE Clientes */
        this.router.delete('/:id', this.controladorClientes.deleteCliente)

        return this.router
    }
}