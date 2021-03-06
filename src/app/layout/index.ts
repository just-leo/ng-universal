import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from '../shared/dropdown.directive'
import { AppRoutingModule } from "../app-routing.module";

// Modules

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    DropdownDirective
    // sub components

    // pipes
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DropdownDirective
  ],
  imports: [
    AppRoutingModule
  ]
})
export class LayoutModule {}
