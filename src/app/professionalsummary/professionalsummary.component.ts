import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-professionalsummary',
  standalone: true,
  imports: [MatListModule, MatRippleModule],
  templateUrl: './professionalsummary.component.html',
  styleUrl: './professionalsummary.component.scss'
})
export class ProfessionalsummaryComponent {

}
