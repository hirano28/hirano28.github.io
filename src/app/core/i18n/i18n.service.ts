import { Injectable, computed, signal } from '@angular/core';
import { Locale, TRANSLATIONS, Translation } from './translations';

const STORAGE_KEY = 'portfolio.locale';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly _locale = signal<Locale>(this.readInitial());

  readonly locale = this._locale.asReadonly();
  readonly t = computed<Translation>(() => TRANSLATIONS[this._locale()]);

  setLocale(locale: Locale): void {
    this._locale.set(locale);
    this.persist(locale);
  }

  toggle(): void {
    this.setLocale(this._locale() === 'pt' ? 'en' : 'pt');
  }

  private persist(locale: Locale): void {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    }
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* storage indisponível */
    }
  }

  private readInitial(): Locale {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt' || stored === 'en') {
        return stored;
      }
      const nav = navigator?.language?.toLowerCase() ?? 'pt';
      return nav.startsWith('pt') ? 'pt' : 'en';
    } catch {
      return 'pt';
    }
  }
}
