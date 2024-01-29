import { Component } from '@angular/core';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
      faComputer = faComputer;
}
