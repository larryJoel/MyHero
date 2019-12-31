import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  //styles: []
})
export class HeroeComponent  {

  heroe:any={};

  constructor( private activateRouter: ActivatedRoute,
               private _heroService: HeroesService) {

    this.activateRouter.params.subscribe ( params =>{
      //console.log( params ['id']);
      this.heroe = _heroService.getHeroe( params['id']);
      console.log(this.heroe);
    });
   }


}
