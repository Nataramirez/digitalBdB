import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = '/person';
  constructor(private http: HttpClient) { }

  //get personas
  getEquipos(){
    return this.http.get(this.url);
  }

  //agregar persona
  addEquipo(persona:Equipo){
    return this.http.post(this.url, persona);
  }
}

export interface Equipo{
  id?:string;
  name?:string;
  lastName?:string;
  birth?:string;
}
