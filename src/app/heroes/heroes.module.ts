import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'; // Importa CommonModule para acceder a directivas comunes de Angular
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule // Asegúrate de importar CommonModule para habilitar ngIf, ngFor, etc.
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule { }
