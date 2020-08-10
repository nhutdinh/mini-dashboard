import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.scss'],
})
export class CustomDivComponent implements OnInit {
  constructor() {}
  onNameChange(val) {
    console.log('Changed', val);
  }
  ngOnInit(): void {}
}
