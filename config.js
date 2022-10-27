import dotenv from 'dotenv'

dotenv.config()

const PORT = 8080
const STRCNX = process.env.STRCNX || 'mongodb://127.0.0.1'
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM' // MEM - MONGO
const BASE = process.env.BASE || 'test'

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE
}
