import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalstoragePipe } from './localstorage.pipe';
import { LocalstorageService } from './localstorage.service';



@NgModule({
  declarations: [
    LocalstoragePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LocalstoragePipe
  ],
  providers: [
    LocalstorageService
  ]
})
export class LocalstorageModule { }
