import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import {MatTableModule} from '@angular/material/table';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { VerBoxesComponent } from './ver-boxes/ver-boxes.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit{
  DoctorsArr: any[]=[]
  ngOnInit(): void {
    const localData = localStorage.getItem('Doctor');
    if(localData!=null) {
      this.DoctorsArr = JSON.parse(localData);
    }
  }
  constructor(
    public dialog: MatDialog,
  ){}

  addDoctor(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Añadir Doctor'
    }
    const dialogRef = this.dialog.open(AddDoctorComponent, dialogConfig);
  }
  searchDoctor(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Buscar Doctor'
    }
    const dialogRef = this.dialog.open(SearchDoctorComponent, dialogConfig);
  }
  verBoxes(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Ver Boxes'
    }
    const dialogRef = this.dialog.open(VerBoxesComponent, dialogConfig);
  }
}
