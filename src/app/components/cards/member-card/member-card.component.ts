import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  @Input() title: string | any;
  @Input() imageUrl: string | any;
  @Input() status: string | any;
}
