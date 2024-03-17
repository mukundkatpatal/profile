import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [MatListModule, MatRipple],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
}
