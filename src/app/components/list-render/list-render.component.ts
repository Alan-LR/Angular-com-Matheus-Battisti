import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {

  animals = [
    {name: 'bob', type: 'cachorro'},
    {name: 'belinha', type: 'gato'},
    {name: 'quindim', type: 'ratão'}
  ]

}
