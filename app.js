const {comando,yargs} = require("./commands")
const {crearNota,verNota,editarNota,eliminarNota} = require("./process/nota")



if(comando.complet){
    comando.complet = comando.complet.toUpperCase();

}


switch(comando._[0]){
    case "view":

        verNota(comando.all,comando.clave,comando.complet)

    break;
    case "create":
        crearNota(comando.description,comando.complet)
        
    break;
    case "delete":
        eliminarNota(comando.all,comando.clave,comando.complet)
    break;
    case "update":
        editarNota(comando.clave,comando.description,comando.complet)
}
