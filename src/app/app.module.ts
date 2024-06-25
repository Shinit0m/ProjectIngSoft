import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { PacienteComponent } from './component/dashboard/paciente/paciente.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { SearchDoctorComponent } from './component/dashboard/doctor/search-doctor/search-doctor.component';
import { LocalstorageModule } from './localstorage/localstorage.module';
import { LocalstorageService } from './localstorage/localstorage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDoctorComponent } from './component/dashboard/doctor/add-doctor/add-doctor.component';
import { WebsiteComponent } from './website/website.component';
import { NavbarComponent } from './website/navbar/navbar.component';
import { ReservarHoraComponent } from './website/reservar-hora/reservar-hora.component';
import { ConsultaMedicaComponent } from './website/consulta-medica/consulta-medica.component';
import { PacienteRegisterComponent } from './website/paciente-register/paciente-register.component';
import { CancelarHoraComponent } from './website/cancelar-hora/cancelar-hora.component';
import { RecetasMedicasComponent } from './website/recetas-medicas/recetas-medicas.component';
import { ExamenesMedicosComponent } from './website/examenes-medicos/examenes-medicos.component';
import { MedicControlComponent } from './component/medic-control/medic-control.component';
import { GenRecetaComponent } from './component/medic-control/gen-receta/gen-receta.component';
import { VerHorarioComponent } from './component/medic-control/ver-horario/ver-horario.component';
import { SubirExamenComponent } from './component/medic-control/subir-examen/subir-examen.component';
import { VerBoxesComponent } from './component/dashboard/doctor/ver-boxes/ver-boxes.component';

export function storageFactory(provider: LocalstorageService){
  return () => provider.setPrefix('test-storage:');
}

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    SidebarComponent,
    SearchDoctorComponent,
    AddDoctorComponent,
    WebsiteComponent,
    NavbarComponent,
    ReservarHoraComponent,
    ConsultaMedicaComponent,
    PacienteRegisterComponent,
    CancelarHoraComponent,
    MedicControlComponent,
    GenRecetaComponent,
    VerHorarioComponent,
    SubirExamenComponent,
    VerBoxesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LocalstorageModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: storageFactory,
    deps: [LocalstorageService],
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
