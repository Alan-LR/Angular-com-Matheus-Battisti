import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.scss']
})
export class IfRenderComponent {

  possoMostrar: boolean = false;

  nome = 'Alan'

  exibir(){
    this.possoMostrar = true;
  }


}
