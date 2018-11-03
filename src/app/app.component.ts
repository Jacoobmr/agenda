import { Component } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda-web';
  owner = 'Christian';

  gretter(name) {
    this.owner = name;
  console.log(this.owner);
  }
}
