import { Component } from '@angular/core';

@Component({
  selector: 'app-gen-receta',
  templateUrl: './gen-receta.component.html',
  styleUrls: ['./gen-receta.component.css']
})
export class GenRecetaComponent {
  onGenerate(){
    alert('Receta generada exitosamente')
  }
}
