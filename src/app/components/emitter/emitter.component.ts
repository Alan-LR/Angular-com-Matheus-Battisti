import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent {

  numero: number = 0;

  onChangeNumber(){
   this.numero = Math.floor(Math.random() * 10);
  }

}
