import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecetasService } from '../recetas.service';
import { Receta } from '../model/receta';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  recetaSvc = inject(RecetasService);
  receta : Receta = {
    nombre:'',
    ingredientes: '',
    pasosReceta: '',
    foto:'',
  };
  mensaje: string = '';
  aniadirReceta() {
    console.log(this.receta);
    this.recetaSvc.aniadirReceta(this.receta);

    this.mensaje = 'La receta ha sido enviada con éxito!';

    this.receta = {
      nombre: '',
      ingredientes: '',
      pasosReceta: '',
      foto: '',
    };
    setTimeout(() => {
      this.mensaje = '';
    }, 3000);
  };

}
