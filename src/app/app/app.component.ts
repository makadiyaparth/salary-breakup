import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private readonly router: Router) {}

  public navigate(event): void {
    this.router.navigate([event.target.value]);
  }
}
