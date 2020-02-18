class Doctor {

    constructor (cedula, especialidad, nombre, telefono){

        this.cedula = cedula;
        this.especialidad = especialidad;
        this.nombre = nombre;
        this.telefono = telefono;

    }
    getPerfil(){
        return (`Cedula:${this.cedula}, Especialidad:${this.especialidad}, Nombre:${this.nombre}, Telefono:${this.telefono}`)

    }
}
let doctor1 = new Doctor(276789, "Neurologia", "Paola", 3124223467 );
console.log(doctor1.getPerfil())