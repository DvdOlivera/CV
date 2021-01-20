


function ejecutarmiDescripcion(p) {
    document.querySelectorAll(".descripciones").forEach((options)=>{
        options.classList.remove('visible');
        options.classList.add('oculto');})

     memoryLoad(p);
}

function memoryLoad(p) {
    
     /* pasar parametro para hacer diferentes operaciones- 1 2 3 4.. etc*/
     if (p == 0){
        
        document.querySelector("#perfil").classList.remove("oculto"); 
        document.querySelector("#perfil").classList.add("visible");
    }

    if (p == 1){
        
        document.querySelector("#contacto").classList.remove("oculto"); 
        document.querySelector("#contacto").classList.add("visible");

    }
    if (p == 2){
        
        document.querySelector("#proyectos").classList.remove("oculto"); 
        document.querySelector("#proyectos").classList.add("visible");

    }

}

//AGRADECER IMAGEN DE FONDO AL FOTOGRAFO
