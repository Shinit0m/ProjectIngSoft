import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  fecha: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: '17/10/23', name: 'recetamedicadia1710', estado: 'leido'},
  {fecha: '12/01/24', name: 'recetamedicadia1201', estado: 'No Leido'},
  {fecha: '10/03/24', name: 'recetamedicadia1003', estado: 'No Leido'},
];

@Component({
  selector: 'app-recetas-medicas',
  templateUrl: './recetas-medicas.component.html',
  styleUrls: ['./recetas-medicas.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule]
})
export class RecetasMedicasComponent {
  displayedColumns: string[] = ['fecha', 'name', 'estado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
