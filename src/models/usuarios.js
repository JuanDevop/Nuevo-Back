import { Schema, model } from "mongoose"
import bcrypt from 'bcryptjs'

 var datosRegistro = new Schema ({
   nombres: {type:String},
   apellidos: {type:String},
   documento: {type:String, unique:true},
   correo: {type:String, unique:true},
   contrasena: {type:String, required: true},
   rol: {type:String, enum:["Administrador", "Lider", "Usuario"]},
   estado: {type:String, enum:["Pendiente", "Autorizado"]}
 }) ;

datosRegistro.statics.encryptPassword = async (password) =>{
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

datosRegistro.statics.comparePassword = async (password, receivedPassword) =>{
  return await bcrypt.compare(password, receivedPassword)
}


 export default model('usuarios', datosRegistro )