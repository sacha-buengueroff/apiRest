import ClientesMongoDAO from './clientesMongoDB.js'
import ClientesMemDAO from './clientesMem.js'

class ClientesFactoryDAO {
    static get(tipo) {
        console.log(tipo);
        switch(tipo) {
            case 'MEM' : 
                console.log("**** Persistiendo en Memoria ****");
                return new ClientesMemDAO()
            case 'MONGO' :
                console.log("**** Persistiendo en MongoDB ****");
                return new ClientesMongoDAO()
            default :
            console.log("**** Persistiendo en Default (Memoria) ****");
                return new ClientesMemDAO()
        }
    }
}

export default ClientesFactoryDAO