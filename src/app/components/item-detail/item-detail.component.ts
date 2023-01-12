import { Component } from '@angular/core';

import { Animal } from '../interfaces/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

  animal?: Animal; //A ? quer dizer que o animal pode vir ou não, a vinda do animal se torna opicional

  id: any;

  constructor(private listService: ListService,
    private route: ActivatedRoute)
  {

  }

  ngOnInit(){
    this.getIdAnimal();
  }

  getIdAnimal(){
    this.id = this.route.snapshot.paramMap.get('id'); //pegamos o ID
    this.listService.getAnimal(this.id).subscribe((animal) => (this.animal = animal));
  }

}
