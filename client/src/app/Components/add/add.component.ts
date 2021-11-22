import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService  } from '../../SERVICES/equipo.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  equipo: Equipo={
    id:'', 
    name:'',
    lastName:'',
    birth:''
  }

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.equipo.id;

    this.EquipoService.addEquipo(this.equipo).subscribe();
    this.router.navigate(['/inicio']);
  }

}
