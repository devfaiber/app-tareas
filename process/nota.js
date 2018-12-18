const fs = require("fs")
const color = require("colors")
// crea una nota
crearNota = (desc,complet)=>{
    notas = cargarDB()

    
    clave = Math.round(Math.random()*1000)
    

    if(desc!=""){
        datos = {
            id:clave,
            descripcion:desc,
            complet
        }
        notas.push(datos)

        console.log(datos)
        guardarDB(notas,"SE HA CREADO TU NOTA".green)
    }else{
        console.log("No se ha podido crear la nota".yellow)
    }

    
}
// guadarNota
guardarDB = (obj,msm)=>{

    obj = JSON.stringify(obj)

    fs.writeFile("./archivos/notas.json",obj,(err)=>{
        if(!err){
            console.log(msm)
        }else{
            console.log(err)
        }
    })
}
// carga la base de datos
cargarDB = ()=>{
    try {
        var lista = require("../archivos/notas.json")
    } catch (error) {
        var lista = []
    }

    return lista
}

// visualiza la nota
verNota = (todo,clave,complet)=>{
    
    notas = cargarDB() // carga las notas

    if(todo){

        console.log(notas)
        console.log("TODAS LAS NOTAS".yellow)


    }else if (clave) {
        
        

        let result = notas.findIndex(el=>{
            return el.id === clave;
        })
       
        
        if(result>=0){
            console.log(notas[result])
        }else{
            console.log("NO SE ENCONTRO LA NOTA".blue)
        }

    }else if (complet!=null) {
        console.log("NOTA ENCONTRADA".yellow)
        for (let i = 0; i < notas.length; i++) {
            
            if(notas[i].complet == complet){
                console.log(notas[i])
            }
            
        }
        
    }else{
        console.log("NOTA NO ENCOTRADA".yellow)
    }
    
}
// elimina las notas
eliminarNota = (todo,clave,complet)=>{
    notas = cargarDB()
    lista = []
    if(todo){
        console.log(notas)
        guardarDB([],"SE HA ELIMINADO TODAS LAS NOTAS".red);
        console.log("SE HAN ELIMINADO".red)

    }else if (clave) {

        let result = notas.find(el=>{
            return el.id === clave;
        })
       
        
        if(result){
            for (let i = 0; i < notas.length; i++) {
                if(notas[i].id != result.id){
                    lista.push(notas[i])
                }
            }

            
            console.log(result)
            guardarDB(lista,"SE HA ELIMINADO EL ELEMENTO".red)
            
            
        }else{
            console.log("NO SE ENCONTRO LA NOTA".red)
        }

    }else if (complet) {
        let cont = 0 // contador de cuatos elimina
        for (let i = 0; i < notas.length; i++) {
            
            if(notas[i].complet != complet){
                lista.push(notas[i])
            }
            else{
                console.log(notas[i])
                cont+=1
            }
            
        }
        if(cont>0){
            guardarDB(lista,"SE HA ELIMINADO".red)
        }else{
            console.log("LA NOTA NO SE HA ENCONTRADO PARA ELIMINAR".red)
        }
    }
}

// editar notas 
editarNota = (clave,descripcion,complet)=>{

    console.log(clave)

    // validacion
    if(!descripcion && !complet){
        console.log("POFAVOR NECESITA UN DATO YA SEA DESCRIPCION O COMPLETADO".bgYellow.black)
        return;
    }

    // carga la database
    notas = cargarDB()


    // halla el objeto con la clave
    var result = notas.find(elem=>{
        if(elem.id === clave){
            return elem
        }
    })
    // halla la posicion
    var index = notas.findIndex(elem=>{
        return elem.id === clave
    })
    console.log(index)
    // evalua cuales tienen contenido
    if(descripcion){result.descripcion = descripcion}
    if(complet){result.complet = complet}

    // mira si si encontro algo
    if(index>=0){

        notas[index] = result
        console.log(result)
        guardarDB(notas,"SE HA EDITADO LA NOTA".gray)

    }else{
        console.log("NO SE HA ENCONTRADO NOTA PARA EDITAR".yellow)
    }

    
}



module.exports = {
    crearNota,
    verNota,
    eliminarNota,
    editarNota
}