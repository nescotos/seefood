import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Config } from '../config';
import "rxjs/add/operator/map";

@Injectable()

export class SeeFoodService{

  constructor(private http:Http){

  }

  getPhotoPrediction(base64Encoded:string){
    let headers = this.createRequestHeaders();
    return this.http.post(
      Config.APIURL + '/predict',
      JSON.stringify({
        image: base64Encoded
      }),
      { headers: headers }
    ).map( res =>  res.json());
  }

  private createRequestHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}
