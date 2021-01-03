import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  public active = 2;

  constructor() { }

  ngOnInit(): void {
  }

  change(number: number) {
    this.active = number;
    console.log(this.active);
  }

}
