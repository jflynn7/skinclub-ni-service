import { localConfig } from './local.config';
import { prodConfig } from './prod.config';

export const getConfig = (env: string) => {
  return env === 'local' ? localConfig : prodConfig;
};
