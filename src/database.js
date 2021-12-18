import mongoose  from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@clustergestiondeproyect.j0xox.mongodb.net/GestionDeProyectos?retryWrites=true&w=majority")
.then(db => console.log('Db is connected'))
.catch(error => console.log(error))