import { Component, inject } from '@angular/core';
import { RecetasService } from '../recetas.service';
import { Receta } from '../model/receta';

@Component({
  selector: 'app-listado-receta',
  standalone: true,
  imports: [],
  templateUrl: './listado-receta.component.html',
  styleUrl: './listado-receta.component.css'
})
export class ListadoRecetaComponent  {
  recetaSvc = inject(RecetasService);
  receta  :Receta[]=[];
  
  ngOnInit() {
    this.receta = this.recetaSvc.devolverReceta();
  }

}
