import { Component } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})

export class JumbotronComponent {
  private heading: string;
  private description: string;
  private buttonLink: string;

  constructor() {
    this.heading = "Jumbotron Heading";
    this.description = " Jumbotron description";
    this.buttonLink = " Read more";
  }
}
