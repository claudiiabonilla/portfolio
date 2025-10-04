import { Env } from '@core/types/env';
import packageJson from '../../package.json';

export const environment: Env = {
  appVersion: `${packageJson.version}-dev`,
  production: false,
  // eslint-disable-next-line no-template-curly-in-string
  apiBaseUrl: '${API_BASE_URL}'
};
