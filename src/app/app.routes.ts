import { Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { CiviaAppComponent } from "./civia/civia-app.component";

export const routes: Routes = [
  { path: "", component: LandingComponent, title: "Vozzale | Gestão completa para Câmaras Municipais" },
  { path: "civia", component: CiviaAppComponent, title: "CIVIA - Plataforma de Gestão para Câmaras Municipais" },
  { path: "**", redirectTo: "" }
];
