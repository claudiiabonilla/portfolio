import { Env } from '@core/types/env';
import packageJson from '../../package.json';

export const environment: Env = {
  appVersion: `${packageJson.version}-dev.local`,
  production: false,
  apiBaseUrl: ''
};
