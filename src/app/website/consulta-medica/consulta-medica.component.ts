import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PacienteRegisterComponent } from '../paciente-register/paciente-register.component';

@Component({
  selector: 'app-consulta-medica',
  templateUrl: './consulta-medica.component.html',
  styleUrls: ['./consulta-medica.component.css']
})
export class ConsultaMedicaComponent {
  constructor(
    public dialog: MatDialog,
  ){}
  registerPac(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Reservar Hora'
    }
    const dialogRef = this.dialog.open(PacienteRegisterComponent, dialogConfig);
  }
}
