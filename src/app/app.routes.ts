import { Routes } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';
import { RouteConstants } from './core/constants/route.constants';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: RouteConstants.EMPTY,
        loadComponent: () => import('./components/index/index.component').then((m) => m.IndexComponent)
      },
      {
        path: RouteConstants.ABOUT,
        loadComponent: () => import('./components/about/about.component').then((m) => m.AboutComponent)
      },
      {
        path: RouteConstants.SKILLS,
        loadComponent: () => import('./components/skills/skills.component').then((m) => m.SkillsComponent)
      },
      {
        path: RouteConstants.PORTFOLIO,
        loadComponent: () => import('./components/portfolio/portfolio.component').then((m) => m.PortfolioComponent)
      },
      {
        path: RouteConstants.CONTACT,
        loadComponent: () => import('./components/contact/contact.component').then((m) => m.ContactComponent)
      }
    ]
  }
];

//export const appRoutingProviders = [provideRouter(routes)];