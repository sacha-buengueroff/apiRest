class ClientesMemDAO {

    constructor() {
        this.clientes = [
            { id: '1', nombre: 'Juan', edad: 23 },
            { id: '2', nombre: 'Ana', edad: 21 },
        ]
    }
    
    // delay = ms => new Promise(resolve => setTimeout(resolve, ms)) // setTimeout recibe un callback y unos milisegundos, cuando pasen esos milisegundos se ejecuta el callback
    
    findCliente = async id => {
        return this.clientes.find(cliente => cliente.id == id) 
    } 
    
    findClientes = async () => this.clientes
    
    saveCliente = cliente => {
        cliente.edad = parseInt(cliente.edad)
        const id = parseInt(this.clientes[this.clientes.length-1].id) + 1
        //const id = ++this.clientes[this.clientes.length-1].id
        cliente.id = String(id)
        this.clientes.push(cliente)
        return cliente
    }
    
    updateCliente = async (cliente, id) => {
        cliente.id = id
        const index = this.clientes.findIndex(cliente => cliente.id == id)
        this.clientes.splice(index, 1, cliente)
        return cliente
    }
    
    deleteCliente = async id => {
        const index = this.clientes.findIndex(cliente => cliente.id == id)
        /* (1)
        const cliente = this.clientes[index]
        this.clientes.splice(index, 1)
        */
       const cliente = this.clientes.splice(index, 1)[0]
       return cliente
    }

}


export default ClientesMemDAO