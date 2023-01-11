import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent {

  @Input() recebendoNome: string = ''; //com Input - recebemos a váriavel do componente pai, posso inicializar a váriavel como vázia ou não
  @Input() userData!: {email: string, password: string} // o ! indica que o dado vai ser iniciado para o angular


}
