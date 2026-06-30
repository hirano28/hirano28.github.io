import { Component, inject } from '@angular/core';
import { DsBadge, DsButton, DsCard } from '@hirano28/core-design-system';
import { I18nService } from '../../core/i18n/i18n.service';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
import { ProjectItem } from '../../core/i18n/translations';

@Component({
  selector: 'app-projects',
  imports: [DsCard, DsBadge, DsButton, RevealOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly i18n = inject(I18nService);

  open(project: ProjectItem): void {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  }
}
