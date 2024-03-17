import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-techskills',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './techskills.component.html',
  styleUrl: './techskills.component.scss'
})
export class TechskillsComponent {

}
