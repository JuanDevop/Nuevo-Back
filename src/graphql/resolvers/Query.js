import usuarios from '../../models/usuarios'
import proyectos from '../../models/proyectos'
import  Jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

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
    },
    async Login(_,{email,contrasena},{SECRET}){
        const userFound = await usuarios.findOne({correo: email})

        if(!userFound) {
            const mensaje = {mensaje: "Usuario no encontrado"}
            return mensaje
        }

        const matchPass = bcryptjs.compareSync(contrasena, userFound.contrasena)

        if(!matchPass){
            const mensaje = {mensaje: "Correo o contraseña invalido"}
            return mensaje
        }

        const token = Jwt.sign({id: userFound._id},SECRET,{
            expiresIn: 86400
        })

        userFound.token = token
        userFound.mensaje = "Ingreso con exito"

        return userFound

    }

}

export default Query;