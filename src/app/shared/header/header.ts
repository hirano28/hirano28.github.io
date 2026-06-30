import { Component, HostListener, inject, signal } from '@angular/core';
import { DsButton } from '@hirano28/core-design-system';
import { I18nService } from '../../core/i18n/i18n.service';
import { ThemeService } from '../../core/theme/theme.service';

interface NavLink {
  id: string;
  key: 'about' | 'experience' | 'skills' | 'projects' | 'contact';
}

@Component({
  selector: 'app-header',
  imports: [DsButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly i18n = inject(I18nService);
  protected readonly themeSvc = inject(ThemeService);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly links: NavLink[] = [
    { id: 'about', key: 'about' },
    { id: 'experience', key: 'experience' },
    { id: 'skills', key: 'skills' },
    { id: 'projects', key: 'projects' },
    { id: 'contact', key: 'contact' },
  ];

  protected readonly cvHref = 'cv/edson-hirano-cv.pdf';

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeSvc.toggle();
  }

  toggleLang(): void {
    this.i18n.toggle();
  }

  downloadCv(): void {
    this.closeMenu();
    const link = document.createElement('a');
    link.href = this.cvHref;
    link.download = 'edson-hirano-cv.pdf';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
