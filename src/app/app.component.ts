import { Component } from '@angular/core';
import { LocalstorageService } from './localstorage/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClinicManagement';

  constructor(){
  }
}
