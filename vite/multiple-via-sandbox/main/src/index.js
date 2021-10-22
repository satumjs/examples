// @ts-check
import { register, start, use } from '@satumjs/core';
import sandboxMidware from '@satumjs/midware-sandbox';
import microCodeMidware from '@satumjs/midware-microcode';
import interceptorMidware from '@satumjs/midware-interceptor';
import singleSpaMidware from '@satumjs/midware-single-spa';

register([{
  name: 'vite-react',
  entry: 'http://localhost:3000/',
  rules: {
    rule: '/',
    container: '#mountNode',
  }
}, {
  name: 'vite-vue3',
  entry: 'http://localhost:3030/',
  rules: {
    rule: '/vue3',
    container: '#mountNode',
    blocks: [{
      path: '/',
      container: '#content'
    }],
  },
  shareProps: {
    statics: { BASE_URL: 'vue3' },
  },
}]);

use((sys, apps, next) => {
  sys.set('domChange', (appName, mountNode) => {
    mountNode.querySelectorAll(`img:not([data-actor-id="${appName}"] [data-actor-id] img)`).forEach(el => {
      const src = el.getAttribute('src');
      const { assetPublicPath } = apps.find(item => item.name === appName);
      const newSrc = /^(https?\:)?\/\//.test(src) ? src : `${assetPublicPath}${src.charAt(0) === '/' ? src.slice(1) : src}`;
      el.setAttribute('src', newSrc);
    });
  });
  next();
});

use(sandboxMidware);
use(microCodeMidware, { simple: true, ableLocationProxy: true });
use(interceptorMidware);
use(singleSpaMidware);

start();