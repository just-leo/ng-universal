import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.css']
})
export class BindingTestComponent implements OnInit {

  input: string = 'type here';

  constructor() { }

  ngOnInit() {
  }

  onResetInput(event: any) {
    this.input = '';
  }

  getColor() {
    return this.input.length ? 'green' : 'red'
  }
}
