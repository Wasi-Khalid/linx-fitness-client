import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "./layout.component";
import { SharedModule } from "../shared/shared.module";
import { RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { NgxSpinnerModule} from "ngx-spinner";



@NgModule({
  declarations: [
    LayoutComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterOutlet,
        MatSidenavModule,
        MatCardModule,
    ]
})
export class LayoutModule { }
