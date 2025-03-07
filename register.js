//constructor
function docente(empleado, nombre, apellido_paterno, apellido_materno, correo){
    this.empleado=empleado;
    this.nombre=nombre;
    this.apellido_paterno=apellido_paterno;
    this.apellido_materno=apellido_materno;
    this.correo=correo;

}
//get the inputs from HTML
const inputempleado = document.getElementById("txtEmpleado");
const inputnombre = document.getElementById("txtNombre");
const inputapellido_paterno = document.getElementById("txtApellido_paterno");
const inputapellido_materno = document.getElementById("txtApellido_materno");
const inputcorreo = document.getElementById("txtCorreo");

function register(){

    // crear objeto
    let nuevodocente= new docente (inputempleado.value, inputnombre.value, inputapellido_paterno.value, inputapellido_materno.value,inputcorreo.value)

     //validar que el usuario haya ingresado datos a cada input
     if(inputempleado.value == ""){
        alert("Ingresa el empleado");
        console.log("Ingresa el empleado");

    }
    else{ 
        if(inputnombre.value == ""){
        alert("Ingresa el nombre");
    }

    }
        
    
   // mostrar datos del usuario
   const lista = document.getElementById("list");

   lista.innerHTML = `
       <p><strong>No empleado:</strong> ${nuevodocente.empleado}</p>
       <p><strong>Nombre:</strong> ${nuevodocente.nombre}</p>
       <p><strong>apellido paterno:</strong> ${nuevodocente.apellido_paterno}</p>
       <p><strong>apellido materno:</strong> ${nuevodocente.apellido_materno}</p>
       <p><strong>correo:</strong> ${nuevodocente.correo}</p>
`;

}




