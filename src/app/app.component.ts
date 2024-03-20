import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    MatButtonModule,
    RouterLink, RouterLinkActive,
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Profile';
  public list: {
    label: string, route: string
  }[] = [
    {
      label: 'About Me', route: '/aboutme'
    },
    {
      label: 'Professional Summary', route: '/professionalsummary'
    },
    {
      label: 'Skills', route: '/skills',
    },
    {
      label: 'Awards', route: '/awards'
    },
    {
      label: 'Certifications', route: '/certifications'
    },
    {
      label: 'Experience', route: '/experience'
    },
  ];

  public selectedItem = 'About Me';
  public selectedRoute = ''
  public onlistItemSelected($event: string): void {    
    this.selectedItem = $event;
  }

}
