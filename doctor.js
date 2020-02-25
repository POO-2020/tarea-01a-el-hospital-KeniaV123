import Nombre from "./nombre.js";

export default class Doctor {

    /**
 * @param {number} cedula 
 * @param {string} especialidad
 * @param {Nombre} nombre
 * @param {number} telefono
 */

    constructor (nombre, especialidad, cedula, telefono){

        this.cedula = cedula;
        this.especialidad = especialidad;
        this.nombre = nombre;
        this.telefono = telefono;

    }
    getPerfil(){
        return (`Cedula:${this.cedula}, Especialidad:${this.especialidad}, 
    Nombre:${this.nombre.getNombreCompleto()}, Telefono:${this.telefono}`)

    }
}
/*
let doctor1 = new Doctor(276789, "Neurologia", new Nombre ("Paola", "Villa", "Serratos"), 3124223467 );
console.log(doctor1.getPerfil())
*/