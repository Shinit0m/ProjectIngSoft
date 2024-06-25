import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SubirExamenComponent } from './subir-examen/subir-examen.component';
import { GenRecetaComponent } from './gen-receta/gen-receta.component';

@Component({
  selector: 'app-medic-control',
  templateUrl: './medic-control.component.html',
  styleUrls: ['./medic-control.component.css']
})
export class MedicControlComponent {
  constructor(
    public dialog: MatDialog,
  ){}
  uploadExamen(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Subir Examen'
    }
    const dialogRef = this.dialog.open(SubirExamenComponent, dialogConfig);
  }
  GenRec(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Generar Receta'
    }
    const dialogRef = this.dialog.open(GenRecetaComponent, dialogConfig);
  }
}
