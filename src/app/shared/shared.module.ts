import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CoreModule } from "../core/core.module";
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { NavComponent } from './components/nav/nav.component';
import { NameAppenderPipe } from './pipes/name-appender.pipe';


@NgModule({
  declarations: [
    CommonButtonComponent,
    NavComponent,
    NameAppenderPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CoreModule
  ],
  exports:[
    CommonButtonComponent,
    NavComponent,
    NameAppenderPipe
  ]
})
export class SharedModule { }
