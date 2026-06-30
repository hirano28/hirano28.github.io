import { Component, inject } from '@angular/core';
import { DsBadge } from '@hirano28/core-design-system';
import { I18nService } from '../../core/i18n/i18n.service';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [DsBadge, RevealOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly i18n = inject(I18nService);
}
