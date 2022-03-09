import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimationComponent } from './animation/animation.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: '', component: AppComponent },

  { path: 'about', component: AboutComponent },
  { path: 'work', component: EducationComponent },

  { path: 'chart', component: AnimationComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
