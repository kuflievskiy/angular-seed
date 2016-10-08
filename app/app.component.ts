import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>

    <nav>
      <a routerLink="albums">Albums</a>
      <a routerLink="contact">Contact</a>    
    </nav>

		<!-- Routed views go here -->
        <router-outlet></router-outlet>
  `
})
export class AppComponent { }