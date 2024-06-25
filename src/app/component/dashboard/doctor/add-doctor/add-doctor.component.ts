import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit{
  ngOnInit(): void {
    const localData = localStorage.getItem('Doctor');
    if(localData!=null) {
      this.addDoctor = JSON.parse(localData);
    }
  }
  addDoctor: any[]=[];
  addObj:any = {
    nombre: "", 
    apellido: "", 
    edad: '', 
    especialidad: "",
    box: '',
  }
  onAddDoctor(){
    this.addDoctor.push(this.addObj);
    localStorage.setItem('Doctor', JSON.stringify(this.addDoctor))
    this.addObj = {
      nombre: "", 
      apellido: "", 
      edad: "", 
      especialidad: "",
      box: '',
    }
  }
}
