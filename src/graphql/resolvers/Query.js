import usuarios from '../../models/usuarios'
import proyectos from '../../models/proyectos'

const Query = {
    async Usuarios(){
        return await usuarios.find()
    },
    async Usuario(_,{_id}){
        return await usuarios.findById(_id)
    },
    async Proyectos(){
        return await proyectos.find()
    },
    async Proyecto(_,{_id}){
        return await proyectos.findById(_id)
    }

}

export default Query;