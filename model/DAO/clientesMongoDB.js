import { ObjectId } from "mongodb"
import CnxMongoDB from '../DB.js'


class ClientesMongoDAO {
    
    findCliente = async id => {
        if(!CnxMongoDB.connection) return {}
        let cliente = await CnxMongoDB.db.collection("clientes").findOne({_id: ObjectId(id)})
        return cliente
    } 
    
    findClientes = async () => {
        if(!CnxMongoDB.connection) return []
        try {
            let clientes = await CnxMongoDB.db.collection('clientes').find({}).toArray()
            return clientes
        }
        catch {
            return []
        }
    } 
    
    saveCliente = async cliente => {
        if(!CnxMongoDB.connection) return {}
        
        cliente.edad = parseInt(cliente.edad)
        await CnxMongoDB.db.collection("clientes").insertOne(cliente)
        return cliente
    }
    
    updateCliente = async (cliente, id) => {
        if(!CnxMongoDB.connection) return {}
        // cliente.id = id
        await CnxMongoDB.db.collection('clientes').updateOne(
            {_id: ObjectId(id)},
            {$set: cliente}
        )
        let clienteActualizado = await this.findCliente(id)
        return clienteActualizado
    }
    
    deleteCliente = async id => {
        if(!CnxMongoDB.connection) return {}
    
        let clienteEliminado = await this.findCliente(id)
        await CnxMongoDB.db.collection("clientes").deleteOne({_id: ObjectId(id)})
        return clienteEliminado
    }

}


export default ClientesMongoDAO