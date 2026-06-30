import { Component, inject } from '@angular/core';
import { DsCard } from '@hirano28/core-design-system';
import { I18nService } from '../../core/i18n/i18n.service';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [DsCard, RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly i18n = inject(I18nService);
}
