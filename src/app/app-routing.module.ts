import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './component/dashboard/paciente/paciente.component';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { WebsiteComponent } from './website/website.component';
import { ConsultaMedicaComponent } from './website/consulta-medica/consulta-medica.component';
import { ExamenesMedicosComponent } from './website/examenes-medicos/examenes-medicos.component';
import { RecetasMedicasComponent } from './website/recetas-medicas/recetas-medicas.component';
import { MedicControlComponent } from './component/medic-control/medic-control.component';
import { GenRecetaComponent } from './component/medic-control/gen-receta/gen-receta.component';
import { VerHorarioComponent } from './component/medic-control/ver-horario/ver-horario.component';

const routes: Routes = [
  {path: 'dashboard', children:[
    {path: '', redirectTo: 'paciente', pathMatch: 'full'},
    {path: 'paciente', component: PacienteComponent},
    {path: 'doctor', component: DoctorComponent},
  ]},
  {path: 'website', children:[
    {path: '', component: WebsiteComponent, pathMatch: 'full'},
    {path: 'consultas', component: ConsultaMedicaComponent},
    {path: 'examenes', component: ExamenesMedicosComponent},
    {path: 'recetas', component: RecetasMedicasComponent}
  ]},
  {
    path: 'medico', children: [
      {path:'', component: MedicControlComponent, pathMatch: 'full'},
      {path:'gen-receta',  component: GenRecetaComponent},
      {path:'horario', component: VerHorarioComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
