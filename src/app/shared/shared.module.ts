import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CoreModule } from "../core/core.module";
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    CommonButtonComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CoreModule
  ],
  exports:[
    CommonButtonComponent,
    NavComponent
  ]
})
export class SharedModule { }
