import { Pipe, PipeTransform } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Pipe({
  name: 'localstorage'
})
export class LocalstoragePipe implements PipeTransform {

  constructor(private localstorageservice: LocalstorageService){

  }

  transform(key: string): unknown {
    return this.localstorageservice.getItem(key)
  }

}
