import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombreP: string = '';
  descripcionP: string = '';
  img: string = '';

  constructor( private proyectosService: ProyectosService, private router: Router){}

  ngOnInit(): void {}

  onCreate(): void {
    const proyec = new Proyectos(this.nombreP, this.descripcionP, this.img);
    this.proyectosService.save(proyec).subscribe(
      data => {
        alert('Proyecto añadido');
        this.router.navigate(['']);
      }, err => {
        alert('Falló');
        this.router.navigate(['']);
      }
    )
  }
}
