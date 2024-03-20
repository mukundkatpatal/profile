import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [MatListModule, MatRippleModule, MatGridListModule, RouterModule, MatCardModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {

}
