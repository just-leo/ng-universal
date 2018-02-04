import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    // this.authService.logout().subscribe(
    //   data => console.log(data)
    // );
  }

}
