import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  copy: [{ src: '_redirects' }],
  outputTargets: [{ type: 'www' }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css'
};
