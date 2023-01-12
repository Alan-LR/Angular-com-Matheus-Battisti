import { ListService } from './../../services/list.service';
import { Component } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {

  animals:  Animal[] = [];

  animalDetails: string = ''

  constructor(private listService: ListService){
    this.getAnimals();
  }

  showAge(animal: Animal){
    this.animalDetails = 'O pet ' + animal.name + ' Tem ' + animal.age + ' anos';
  }

  getAnimals(){
    this.listService.getAll().subscribe((infoAnimals) => (this.animals = infoAnimals));
  }

  remover(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name) // apagando visualmente no front, para exemplo
    this.listService.remove(animal.id).subscribe()
  }

  ngOnInit(){

  }

}
