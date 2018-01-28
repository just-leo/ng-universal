import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  showMore: boolean = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.showMore = !this.showMore;
    this.logs.push(new Date);
  }
}
