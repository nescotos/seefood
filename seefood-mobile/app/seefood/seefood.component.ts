import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as camera from "nativescript-camera";
import { ImageSource } from 'tns-core-modules/image-source';
import { SeeFoodService } from '../services/seefood.service';

@Component({
  selector: 'seefood-component',
  moduleId: module.id,
  templateUrl: './seefood.component.html',
  providers: [ImageSource, SeeFoodService]
})

export class SeeFoodComponent implements OnInit{

  constructor(private router:Router, private imageSource:ImageSource, private seeFoodService:SeeFoodService){

  }

  ngOnInit(){
    camera.requestPermissions();
  }

  predictFood(){
    //TODO: Open the camera, take the photo, convert it to base 64 and make a post request
    camera.takePicture({ width: 300, height: 300, keepAspectRatio: true})
    .then((image) => {
      this.imageSource.fromAsset(image).then((photo) => {
        let encodedImage = photo.toBase64String("jpeg", 100);
        this.seeFoodService.getPhotoPrediction(encodedImage).subscribe(res => {
          console.log(res.json);
        }, err => {
          console.log('There is an error', err);
        })
      });
    });
    // this.router.navigate(['/seefood-detail'])
  }

}
