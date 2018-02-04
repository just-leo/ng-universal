import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';
import { DropdownDirective } from '../shared/dropdown.directive'

// Modules

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    DropdownDirective
    // sub components
    // ProfileDropdownComponent

    // pipes
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
  ]
})
export class LayoutModule {}
