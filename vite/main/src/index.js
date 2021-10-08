// @ts-check
import { register, start, use } from '@satumjs/core';

register({
  name: 'vite',
  entry: 'http://localhost:3000/',
  rules: {
    rule: '/',
    container: '#mountNode'
  },
});

use((sys, apps, next) => {
  sys.set('domChange', (appName, mountNode) => {
    mountNode.querySelectorAll('img').forEach(el => {
      const src = el.getAttribute('src');
      const { assetPublicPath } = apps.find(item => item.name === appName);
      const newSrc = /^(https?\:)?\/\//.test(src) ? src : `${assetPublicPath}${src.charAt(0) === '/' ? src.slice(1) : src}`;
      el.setAttribute('src', newSrc);
    });
  })
  next();
})

start();