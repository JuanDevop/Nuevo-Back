import { Schema, model } from "mongoose"


var perfil = new Schema ({
    documento: {ref: "usuarios", type: Schema.Types.ObjectId },
    proyectos: [
        {
          ref: "Proyecto",
          type: Schema.Types.ObjectId
        }
      ],
      celular: {type:String},
      direccion: {type:String},
      ciudad: {type:String},
      descripcion: {type:String},
}); 


export default model('perfil', perfil)