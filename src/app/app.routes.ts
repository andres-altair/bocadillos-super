import { Routes } from '@angular/router';
import { ListadoRecetaComponent } from './listado-receta/listado-receta.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    {path: 'listadoReceta', component: ListadoRecetaComponent },
    {path: 'formulario', component: FormularioComponent},
];
