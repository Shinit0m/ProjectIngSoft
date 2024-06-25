import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit{
  Doctor: any[] = []
  constructor(){
  }
  ngOnInit(): void {
    const localData = localStorage.getItem('Doctor');
    if(localData!=null) {
      this.Doctor = JSON.parse(localData);
    }
  }

  BuscarDoctor:any = {
    name: '',
    especialidad:''
  };
  onSearchName(){
    const isUserExist = this.Doctor.find(m=>m.nombre == this.BuscarDoctor.name || m.apellido == this.BuscarDoctor.name);
    if (isUserExist!=undefined){
      alert('Nombre encontrado Correctamente');
    }else{
      alert('Credenciales erroneas');
    }
  }
}


