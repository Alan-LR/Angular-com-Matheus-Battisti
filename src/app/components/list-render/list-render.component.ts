import { ListService } from './../../services/list.service';
import { Component } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {

  animals: Animal[] = [
    { name: 'bob', type: 'cachorro', age: 4 },
    { name: 'belinha', type: 'gato', age: 2 },
    { name: 'quindim', type: 'ratão', age: 1 }
  ]

  animalDetails: string = ''

  constructor(private listService: ListService) { }

  showAge(animal: Animal) {
    this.animalDetails = 'O pet ' + animal.name + ' Tem ' + animal.age + ' anos';
  }

  removeAnimal(animal: Animal){
    this.animals =  this.listService.remove(this.animals, animal)
  }

}
