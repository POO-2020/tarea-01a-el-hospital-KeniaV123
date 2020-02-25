import Nombre from "./nombre.js";
import Fecha from "./fecha.js";


export default class Paciente {

    /**
 * @param {Nombre} nombre
 * @param {Fecha} fechaNacimiento
 * @param {number} telefono
 */


    constructor (nombre, fechaNacimiento, telefono ){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;


    }
   getPerfil (){
       return (`Nombre del paciente: ${this.nombre.getNombreCompleto()}, Fecha de nacimiento:${this.fechaNacimiento.getFecha()}, Telefono:${this.telefono}`)
   
     }
 }
 /*
   let paciente1 = new Paciente (new Nombre ("Kenia", "Villa", "Serratos"), new Fecha (4,11,2000), 31417845 );
   console.log (paciente1.getPerfil())
*/