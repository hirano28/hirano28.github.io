import { Component, inject } from '@angular/core';
import { DsBadge, DsButton } from '@hirano28/core-design-system';
import { I18nService } from '../../core/i18n/i18n.service';
import { CONTACT } from '../../core/i18n/translations';

@Component({
  selector: 'app-hero',
  imports: [DsButton, DsBadge],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly i18n = inject(I18nService);
  protected readonly contact = CONTACT;

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
