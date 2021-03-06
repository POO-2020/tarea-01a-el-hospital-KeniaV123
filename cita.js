import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Paciente from "./paciente.js";
import Nombre from "./nombre.js";

export default class Cita {

/**
 * @param {Fecha} fecha
 * @param {Tiempo} hora
 * @param {Doctor} doctor
 * @param {Paciente} paciente 
 */

    constructor(fecha, hora, doctor, paciente){
        this.fecha = fecha;
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }
    getCita(){
        return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, 
        Dr. ${this.doctor.nombre.apellidoPaterno}, ${this.paciente.nombre.getNombreCompleto()}`;
    }
}
/*
let cita1 = new Cita (
new Fecha(1,2,2020), 
new Tiempo(3,23,"AM"), 
new Doctor(new Nombre ("Karla","Sierra", "Rodriguez")), 
new Paciente(new Nombre ("José", "Villa", "Serratos")));
     
console.log(cita1.getCita())
*/