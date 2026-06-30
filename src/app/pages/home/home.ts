import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Experience } from '../../sections/experience/experience';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Experience, Skills, Projects, Contact],
  template: `
    <app-hero />
    <app-about />
    <app-experience />
    <app-skills />
    <app-projects />
    <app-contact />
  `,
})
export class Home {}
