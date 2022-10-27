import ApiClientes from '../api/clientes.js'

class ControladorClientes {
    
    constructor() {
        this.apiClientes = new ApiClientes()
    }
    getClientes = async (req,res) => { //:id? es un parametro de request que viene por req.params (route params) (el signo de pregunta muestra que es opcional)
        //const id = req.params.id
        const { id } = req.params
        res.json(await this.apiClientes.obtenerClientes(id))
    }
    
    postCliente = async (req,res) => {
        const cliente = req.body //como uso body params es un POST (se manda JSON o urlencoded) (no se pueden usar en GET y DELETE)
        res.json(await this.apiClientes.guardarCliente(cliente))
        // res.redirect('/')
    }
    
    putCliente = async (req, res) => { // POST agrega, PUT actualiza parcial o totalmente
        const { id } = req.params
        const cliente = req.body
        res.json(await this.apiClientes.actualizarCliente(cliente, id))
    }
    
    deleteCliente = async (req, res) => { 
        const { id } = req.params
        // (2)
        res.json(await this.apiClientes.eliminarCliente(id))
    }
}


export default ControladorClientes