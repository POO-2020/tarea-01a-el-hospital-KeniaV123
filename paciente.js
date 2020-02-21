class Paciente {


    constructor (nombre, fechaNacimiento, telefono ){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;


    }
   getPerfil (){
       return (`Nombre del paciente: ${this.nombre}, Fecha de nacimiento:${this.fechaNacimiento}, Telefono:${this.telefono}`)
   
     }
 }
   let paciente1 = new Paciente ("Kenia Villa", "4,11,2000", 31417845 );
   console.log (paciente1.getPerfil())
