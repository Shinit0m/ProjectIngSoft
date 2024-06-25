import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-register',
  templateUrl: './paciente-register.component.html',
  styleUrls: ['./paciente-register.component.css']
})
export class PacienteRegisterComponent implements OnInit{
  ngOnInit(): void {
    const localData = localStorage.getItem('Paciente');
    if(localData!=null) {
      this.addPac = JSON.parse(localData);
    }
  }
  addPac:Paciente[] = [];
  addObj: Paciente = new Paciente();
  onRegister(){
    this.addPac.push(this.addObj);
    localStorage.setItem('Paciente', JSON.stringify(this.addPac))
  }
}


export class Paciente {
  nombre!: string; 
  apellido!: string; 
  email!: string; 
  telefono!: string;
  edad!: string;
  rut!: string;
  hora!: string;

  constructor(){
    this.nombre= ''; 
    this.apellido= ''; 
    this.email= ''; 
    this.telefono= '';
    this.edad= '';
    this.rut= '';
    this.hora= '';
  }
}