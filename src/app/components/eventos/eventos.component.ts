import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  show: boolean = false;

  showMessage(){
    this.show = !this.show; //!this.show vai ser sempre o contrario do valor show atual = toggle
  }

}
