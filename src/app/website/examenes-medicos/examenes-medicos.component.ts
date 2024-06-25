import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface PeriodicElement {
  name: string;
  fecha: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fecha: '17/10/23', name: 'ElectroCardiograma', estado: 'No leido'},
  {fecha: '12/01/24', name: 'GlucoseTest', estado: 'Leido'},
  {fecha: '10/03/24', name: 'UrineTest', estado: 'No Leido'},
];

@Component({
  selector: 'app-examenes-medicos',
  templateUrl: './examenes-medicos.component.html',
  styleUrls: ['./examenes-medicos.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule]
})

export class ExamenesMedicosComponent {
  displayedColumns: string[] = ['fecha', 'name', 'estado'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
