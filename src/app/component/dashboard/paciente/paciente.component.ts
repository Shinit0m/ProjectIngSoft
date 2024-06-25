import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class PacienteComponent implements OnInit{
  PacienteList: Paciente[] = []
  ngOnInit(): void {
    const localData = localStorage.getItem("Paciente");
    if(localData!=null) {
      this.PacienteList = JSON.parse(localData);
    }
  }
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'edad','rut'];
  dataSource = new MatTableDataSource(this.PacienteList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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