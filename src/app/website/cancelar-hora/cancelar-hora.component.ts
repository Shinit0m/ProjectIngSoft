import { Component } from '@angular/core';

@Component({
  selector: 'app-cancelar-hora',
  templateUrl: './cancelar-hora.component.html',
  styleUrls: ['./cancelar-hora.component.css']
})
export class CancelarHoraComponent {
  onCancelar(){
    alert('Hora cancelada con exito')
  }
}
