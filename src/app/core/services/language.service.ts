import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = 'es';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLang);
  }

  get language(): string {
    return this.currentLang;
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  loadSavedLanguage() {
    const saved = localStorage.getItem('lang');
    if (saved) {
      this.setLanguage(saved);
    }
  }
}
