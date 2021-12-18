import { Schema, model } from "mongoose"

 var datosProyecto = new Schema ({
   nombre: {type:String},
   estado: {type:String, enum:["Activo", "Inactivo"]},
   fase: {type:String, enum:["En desarrollo", "Terminado"]},
   lider: {type:String},
   objetivosgenerales: {type:Array},
   objetivosespecificos: {type:Array},
   presupuesto: {type:Number},
   fechainicio: {type:String},
   fechafin: {type:String},
   estudiantes: {type:Array},
   avances: {type: Array}
 }) 

 export default model('proyectos', datosProyecto )