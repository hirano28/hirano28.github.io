import { Component, inject } from '@angular/core';
import { DsBadge, DsCard } from '@hirano28/core-design-system';
import { I18nService } from '../../core/i18n/i18n.service';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [DsCard, DsBadge, RevealOnScrollDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly i18n = inject(I18nService);
}
