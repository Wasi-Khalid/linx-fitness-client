import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./pages/authentication/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { RegisterComponent } from "./pages/authentication/register/register.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { authGuard } from "./guards/authentication/auth.guard";
import { MemberComponent } from "./pages/client/member/member.component";
import { AddMemberComponent } from "./pages/client/member/add-member/add-member.component";

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    canActivate: [authGuard],
    children:[{
      path:'',
      redirectTo: 'dashboard',
      pathMatch: "full"
    },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'member',
        component: MemberComponent
      },
      {
        path:'add-member',
        component: AddMemberComponent
      },
    ]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
