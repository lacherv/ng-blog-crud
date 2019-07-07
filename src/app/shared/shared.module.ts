import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../material.module";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [CommonModule, MaterialModule, NavbarComponent, RouterModule]
})
export class SharedModule {}
