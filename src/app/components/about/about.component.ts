import { Component } from '@angular/core';
import { LogoComponent } from '@app/common/layout/header/logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [LogoComponent, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
