import { Injectable } from '@angular/core';
import { Receta } from './model/receta';
// Crear el servicio Recetas, que además de tener un array de recetas, 
//tendrá también al menos dos métodos: añadir receta y devolver todas las recetas.
@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  receta: Receta[] = [];
  constructor() { }
  aniadirReceta(receta:Receta){
    this.receta.push(receta);
  }
  devolverReceta(): Receta[]{
    return this.receta;
  }
}
