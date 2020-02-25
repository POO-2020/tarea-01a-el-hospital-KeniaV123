import Cita from "./cita.js";

class Main {

    constructor(){

    }
probarCita(){
    let cita1 = new Cita (new Fecha(1,2,2020), new Tiempo(3,23,"AM"), new Doctor (new Nombre ("Karla","Sierra", "Rodriguez")), new Paciente(new Nombre ("José", "Villa", "Serratos")));
     
console.log(cita1.probarCita()) 
}

}

let app = new Main();
app.probarCita();

import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Nombre from "./nombre.js";
import Cita from ".//cita.js";
import Hospital from "./hospital.js";
class Main {
  constructor() {
    this.hospital = new Hospital("Hospital", "Av. Carranza");
  }

  probarCita() {
    let x = new Cita(new Fecha(22, 1, 2001), new Tiempo(5, 30, 'PM'), new Doctor(new Nombre("Ernesto", "Gonzalez", "Bocanegra"),
      "Cirujano",
      3121145555,
      28), new Paciente(new Nombre("Kenia", "Villa", "Serratos"),
        new Fecha(22, 1, 2001),
        7865549));

    console.log(x.getPerfil());
  }

  agregarDoctor() {
    let doctor1 = new Doctor(
      new Nombre("Ernesto", "Gonzalez", "Bocanegra"),
      "Cirujano",
      3121145555,
      28
    );
    let doctor2 = new Doctor(
      new Nombre("Mario", "Castañeda", "Kokun"),
      "Radiologo",
      3000000,
      280000
    );
    this.hospital.registrarDoctor(doctor1);
    this.hospital.registrarDoctor(doctor2);
    this.hospital.listarDoctores();
  }
  agregarCita() {
    let cita1 = new Cita(
      new Fecha(22, 2, 2020),
      new Tiempo(5, 30, "PM"),
      new Doctor(
        new Nombre("Mario", "Castañeda", "Kokun"),
        "Radiologo",
        3000000,
        280000
      ),
      new Paciente(
        new Nombre("Edson", "Govea", "Rodríguez"),
        new Fecha(22, 1, 2001),
        3121135597
      )
    );
    this.hospital.registrarCita(cita1);
    this.hospital.listarCitas();
  }
}
let app = new Main();
app.agregarDoctor();
app.agregarCita();
app.probarCita();