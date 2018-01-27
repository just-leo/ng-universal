import { Component } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
  <p class="alert alert-{{type}}">{{text}} AAAAAAAAAAAAAAAAAAAlert</p>`,
  styleUrls: [
    './alert.component.css'
  ]
})

export class AlertComponent {

  text = 'Hey You!!';

  type = 'warning';
}
