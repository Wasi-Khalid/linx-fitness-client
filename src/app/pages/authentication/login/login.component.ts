import { Component } from '@angular/core';
import { ErrorStateMatcher } from "@angular/material/core";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ApplicationState } from "../../../store/application.state";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { dispatchGetLogin } from "../../../store/functions/authentication/auth.function";
import { Actions } from "@ngrx/effects";
import {GetLogin} from "../../../store/actions/userAction/user.action";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: []
})
export class LoginComponent {
  userNameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher;

  constructor(
    private store: Store<ApplicationState>,
    private toast: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private actions$: Actions
  ) {}

  onLogin(name: any, password: any) {
    const formData: any = {
      username: name,
      password: password
    };

    dispatchGetLogin(this.store,this.actions$, formData)
      .then((user) => {
        this.toast.success('Login successful', '', { timeOut: 3000 });
        localStorage.setItem('token', user.access);
        if (localStorage.getItem('token')) {
          this.spinner.show();
          setTimeout(() => {
            this.router.navigate(['/']);
            this.spinner.hide();
          }, 3000);
        }
      })
      .catch((error) => {
        this.toast.error(`${error.error}`, '', { timeOut: 3000 });
      });
  }
}
