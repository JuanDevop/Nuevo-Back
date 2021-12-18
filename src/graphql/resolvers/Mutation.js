import usuarios from '../../models/usuarios'
import proyectos from '../../models/proyectos'
import bcryptjs from 'bcryptjs'
import  Jwt from 'jsonwebtoken'

const Mutation = {

    async createUser(_,{input},{SECRET}){

        const salt = bcryptjs.genSaltSync(10)
        input.contrasena = bcryptjs.hashSync(input.contrasena, salt)
        const nuevoUsuario = new usuarios(input)
        await nuevoUsuario.save()
        
        const token = Jwt.sign({id: nuevoUsuario._id, rol: nuevoUsuario.rol },SECRET,{
            expiresIn: 86400
        })

        nuevoUsuario.token = token

        return nuevoUsuario
    },
    async deleteUser(_,{_id}){
       return await usuarios.findByIdAndDelete(_id);
    },
    async updateUser(_, args){
        return await usuarios.findByIdAndUpdate(args._id,{
          nombres: args.nombres,
          apellidos: args.apellidos,
          documento: args.documento,
          correo: args.correo,
          rol: args.rol,
          estado: args.estado,
        }, {new: true})
    },
     createProyecto: async (_,{input}) => {
        const nuevoProyecto = new proyectos(input)
        return await nuevoProyecto.save()
    },
    async deleteProyecto(_,{_id}){
        return await proyectos.findByIdAndDelete(_id);
    },
    async updateProyecto(_,{_id,input}){
        return await proyectos.findByIdAndUpdate(_id,input, {new: true})
    }
}

export default Mutation;