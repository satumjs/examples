// @ts-check
import { register, start, use, MidwareName } from '@satumjs/core';
import singleSpaMidware from '@satumjs/midware-single-spa';

register({
  name: 'vite',
  entry: 'http://localhost:3000/',
  rules: {
    rule: '/',
    container: '#mountNode'
  },
});

use((sys, apps, next) => {
  sys.set(MidwareName.domChange, (appName, mountNode) => {
    mountNode.querySelectorAll('img').forEach(el => {
      const src = el.getAttribute('src');
      const { assetPublicPath } = apps.find(item => item.name === appName);
      const newSrc = /^(https?\:)?\/\//.test(src) ? src : `${assetPublicPath}${src.charAt(0) === '/' ? src.slice(1) : src}`;
      el.setAttribute('src', newSrc);
    });
  })
  next();
});

use(singleSpaMidware);

start();