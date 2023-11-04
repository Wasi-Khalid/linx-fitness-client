import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from "./layout/layout.module";
import { MemberCardComponent } from "./cards/member-card/member-card.component";

@NgModule({
  declarations: [
    MemberCardComponent
  ],
  exports: [
    MemberCardComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
  ]
})
export class ComponentsModule { }
