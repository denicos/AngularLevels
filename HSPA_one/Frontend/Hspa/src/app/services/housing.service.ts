import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { map}  from 'rxjs/operators'
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) {

 }
 getAllProperties(SellRent :number): Observable<IProperty[]>{
  return this.http.get('Data/properties.json').pipe(
    map(data =>{
      const propertyArray : Array<IProperty> = [];
      for(const id in data){
        if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
          propertyArray.push(data[id]);
        }
      }
      return propertyArray;
    })
  )
}

}