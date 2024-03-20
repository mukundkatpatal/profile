import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [MatListModule, MatRipple,MatGridListModule,  MatCardModule, MatButtonModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
}
