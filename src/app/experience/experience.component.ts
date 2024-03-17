import { Component } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatRipple } from '@angular/material/core';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatExpansionModule, MatRipple],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
