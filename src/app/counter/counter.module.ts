import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'; // Importa CommonModule para acceder a directivas comunes de Angular
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule // Asegúrate de importar CommonModule para habilitar ngIf, ngFor, etc.
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
