import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProfessionalsummaryComponent } from './professionalsummary/professionalsummary.component';
import { TechskillsComponent } from './techskills/techskills.component';
import { AwardsComponent } from './awards/awards.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'professionalsummary', component: ProfessionalsummaryComponent },
  { path: 'skills', component: TechskillsComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'experience', component: ExperienceComponent },
];