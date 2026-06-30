import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n/i18n.service';
import { CONTACT } from '../../core/i18n/translations';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly contact = CONTACT;
  protected readonly year = new Date().getFullYear();
}
