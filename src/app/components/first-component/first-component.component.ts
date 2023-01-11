import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {

  name = 'Alan';

  hobbies = ['Jogar', 'ler', 'estudar']; //array de dados

  car = {  
    name: 'Prisma',
    year: 2023
  }

  constructor(){

  }

  ngOnInit(){

  }

}
