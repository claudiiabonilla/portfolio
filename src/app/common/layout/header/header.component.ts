import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '@app/core/services/language.service';
import { ThemeService } from '@app/core/services/theme.service';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, LogoComponent, TranslateModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public themeService = inject(ThemeService);
  public langService = inject(LanguageService);

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  changeLanguage(lang: string) {
    this.langService.setLanguage(lang);
  }
}
