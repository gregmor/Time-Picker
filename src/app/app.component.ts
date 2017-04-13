import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
      <h1>
        {{title}}<br />
      </h1>
      <nav>
        <a routerLink="/workSession" routerLinkActive="active">Work Session</a>
        <a routerLink="/client" routerLinkActive="active">Client</a>
      </nav>
      <br />
      <router-outlet></router-outlet>
    `
})

export class AppComponent {
  title = 'Time Pickers!';
}
