import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withHashLocation } from '@angular/router';
import { DEFAULT_I18N_LANG, ENV } from '@core/constants/global.constants';
import { environment } from '@env';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
      provideTranslateService({
      lang: DEFAULT_I18N_LANG,
      loader: provideTranslateHttpLoader({
        prefix: 'assets/i18n/',
        suffix: '.json'
      })
    }),
    provideTranslateHttpLoader(),
    // * IMPORTANT: When you need to use environment variables,
    // * provide them like this! And use them with `@Inject(ENV)`.
    // * See `app.component.ts` for an example.
    { provide: ENV, useValue: environment },
    provideAnimationsAsync()
  ]
};
