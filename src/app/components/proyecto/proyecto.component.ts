import { Component } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyec: Proyectos[] = [];

  constructor ( private proyectosService: ProyectosService,  private tokenService:TokenService) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyectos(): void {
    this.proyectosService.lista().subscribe(data => { this.proyec = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectosService.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
