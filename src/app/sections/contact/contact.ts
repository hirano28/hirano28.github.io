import { Component, inject } from '@angular/core';
import { DsButton } from '@hirano28/core-design-system';
import { I18nService } from '../../core/i18n/i18n.service';
import { CONTACT } from '../../core/i18n/translations';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [DsButton, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  protected readonly contact = CONTACT;

  mailto(): void {
    window.location.href = 'mailto:' + this.contact.email;
  }
}
