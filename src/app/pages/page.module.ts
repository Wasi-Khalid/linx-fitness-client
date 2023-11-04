import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./authentication/login/login.component";
import { RegisterComponent } from "./authentication/register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { MemberComponent } from './client/member/member.component';
import { MatIconModule } from "@angular/material/icon";
import { AddMemberComponent } from './client/member/add-member/add-member.component';
import { MatListModule} from "@angular/material/list";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ComponentsModule } from "../components/components.module";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MemberComponent,
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    ComponentsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule
  ]
})
export class PageModule { }
