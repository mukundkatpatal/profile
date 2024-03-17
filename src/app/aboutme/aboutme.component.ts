import { Component } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

}
