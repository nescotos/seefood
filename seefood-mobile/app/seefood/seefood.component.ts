import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'seefood-component',
  moduleId: module.id,
  templateUrl: './seefood.component.html'
})

export class SeeFoodComponent{

  constructor(private router:Router){

  }

  predictFood(){
    //TODO: Open the camera, take the photo, convert it to base 64 and make a post request
    this.router.navigate(['/seefood-detail'])
  }

}
