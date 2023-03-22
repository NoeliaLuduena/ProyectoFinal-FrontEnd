import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  proyec: Proyectos = null;

constructor (private proyectosService: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router){}

ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyectosService.detail(id).subscribe(
    data =>{
      this.proyec = data;
    }, err =>{
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    }
  )
}

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyectosService.update(id, this.proyec).subscribe(
    data => {
      this.router.navigate(['']);
    }, err =>{
       alert("Error al modificar el proyecto");
       this.router.navigate(['']);
    }
  )
}

}
