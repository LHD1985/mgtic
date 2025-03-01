//constructor
function docente(empleado,nombre,paterno,materno){
    this.empleado=empleado;
    this.nombre=nombre;
    this.paterno=paterno;
    this.materno=materno;

}
//get the inputs from HTML
const inputempleado = document.getElementById("txtempleado");
const inputnombre = document.getElementById("txtnombre");
const inputpaterno = document.getElementById("txtapaterno");
const inputmaterno = document.getElementById("txtmaterno");

function register(){
    // crear objeto
    let newdocente=new docente (inputempleado.value, inputnombre.value, inputpaterno.value, inputmaterno.value)
     //desplegar el obj
     if( inputName.value == ""){
        alert("Ingresa el nombre");
    }else{
        display(newdocente);
    }
}

function display(docente){
    const list = document.getElementById("list");
    p=`
    <div> 
        <p>${docente.nombre} - ${docente.paterno}</p>
    </div>
    `;
    list.innerHTML+=p;// inserta en HTML
}

//objetos

let docente1 = new docente("1","Karla","perez","haros");

display(docente1);