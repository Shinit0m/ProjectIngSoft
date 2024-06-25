import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReservarHoraComponent } from './reservar-hora/reservar-hora.component';
import { CancelarHoraComponent } from './cancelar-hora/cancelar-hora.component';
import { ExamenesMedicosComponent } from './examenes-medicos/examenes-medicos.component';
import { RecetasMedicasComponent } from './recetas-medicas/recetas-medicas.component';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {
  constructor(
    public dialog: MatDialog,
  ){}
  reservarHora(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Reservar Hora'
    }
    const dialogRef = this.dialog.open(ReservarHoraComponent, dialogConfig);
  }
  cancelarHora(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Cancelar Hora'
    }
    const dialogRef = this.dialog.open(CancelarHoraComponent, dialogConfig);
  }
}
