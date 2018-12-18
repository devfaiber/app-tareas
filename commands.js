const yargs = require("yargs")
.command("create","crear nota",{
    description:{
        demand:true,
        alias:"d"
    },
    clave:{
        default:"",
        alias:"p"
    },
    complet:{
        alias:"c",
        default:"NO"
    }
})

.command("view","view the note",{
    all:{
        default:null,
        alias:"a"
    },
    complet:{
        default:null,
        alias:"c"
    },
    clave:{
        default:null,
        alias:"p"
    }
})
.command("delete","delete the note",{
    all:{
        default:false,
        alias:"a"
    },
    complet:{
        default:null,
        alias:"c",
    },
    clave:{
        default:"",
        alias:"p"
    }
})
.command("update","update the note",{
    
    clave:{
        demand:true,
        default:"",
        alias:"p"
    },
    description:{
        demand:true,
        alias:"d",
        default:null
    },
    complet:{
        alias:"c",
        default:null
    }
    
})
.help()


let comando = yargs.argv


module.exports = {
    comando,
    yargs
}