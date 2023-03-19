import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';
/*import { ImageService } from 'src/app/service/image.service';*/

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
persona: persona = null;

  constructor (private activatedRouter : ActivatedRoute,
    private personaService: PersonaService,
    private router: Router/*,
    public imageService: ImageService*/){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }
    
    


  /*uploadImage($event:any) {
    /*const id = this.activatedRouter.snapshot.params['id'];   
    const name = "perfil_"+ id;                                       esto no aperece en EDIT EXPE TS */                                   
/*this.imageService.uploadImage($event)//, name)*/

 // }

 
}
