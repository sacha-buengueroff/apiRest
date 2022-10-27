// import model from '../model/clientesMem.js'
import ClientesFactoryDAO from '../model/DAO/clientesFactory.js'
import config from '../config.js'

class ApiClientes {
    
    constructor() {
        this.clientesModel = ClientesFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerClientes = async id => {
        return id? await this.clientesModel.findCliente(id) : await this.clientesModel.findClientes()
    }

    guardarCliente = async cliente => {
        return await this.clientesModel.saveCliente(cliente)
    }  
    
    actualizarCliente = async (cliente, id) => {
        return await this.clientesModel.updateCliente(cliente, id)
    }
       
    eliminarCliente = async id => {
       return this.clientesModel.deleteCliente(id)
    }
}


export default ApiClientes