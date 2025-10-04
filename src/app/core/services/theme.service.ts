import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeKey = 'dark-mode';

  constructor() {
    const savedTheme = localStorage.getItem(this.darkModeKey);
    if (savedTheme === 'true') {
      this.enableDarkMode();
    }
  }

  isDarkMode(): boolean {
    return document.body.classList.contains('dark-mode');
  }

  toggleDarkMode(): void {
    if (this.isDarkMode()) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  private enableDarkMode(): void {
    document.body.classList.add('dark-mode');
    localStorage.setItem(this.darkModeKey, 'true');
  }

  private disableDarkMode(): void {
    document.body.classList.remove('dark-mode');
    localStorage.setItem(this.darkModeKey, 'false');
  }
}
