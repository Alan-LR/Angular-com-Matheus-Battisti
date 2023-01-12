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

  ngOnInit(){

  }

}
