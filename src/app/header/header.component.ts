import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Happy Choices';

  constructor() { }

  ngOnInit() {
  }

}
