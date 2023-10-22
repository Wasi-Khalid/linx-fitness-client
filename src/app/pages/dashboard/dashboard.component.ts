import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from "../../store/application.state";
import { getUser } from "../../store/selectors/userSelector/user.selector";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user$ = this.store.pipe(select(getUser));

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.user$.subscribe(user => {
      console.log('User:', user);
    });
  }
}
