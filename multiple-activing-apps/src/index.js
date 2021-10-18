// @ts-check
import { register, start, use } from '@satumjs/core';
import sandboxMidware from '@satumjs/midware-sandbox';
import microCodeMidware from '@satumjs/midware-microcode';
import interceptorMidware from '@satumjs/midware-interceptor';
import singleSpaMidware from '@satumjs/midware-single-spa';

register([{
  name: 'vite',
  entry: 'http://localhost:3000/',
  rules: {
    rule: '/',
    container: '#mountNode',
    blocks: [{
      path: '/dashboard/monitor',
      container: '.App'
    }]
  },
},{
  name: 'antd-pro',
  entry: 'https://preview.pro.ant.design/',
  rules: [{
    rule: '/',
    container: '#mountNode'
  }, {
    rule: '/dashboard',
    container: '#mountNode',
  }]
}]);

use((sys, apps, next) => {
  sys.set('processUrlOption', {
    whiteList: ['preview.pro.ant.design', 'proapi.azurewebsites.net', 'static.cloudflareinsights.com']
  });
  sys.set('domChange', (appName, mountNode) => {
    mountNode.querySelectorAll('img').forEach(el => {
      const src = el.getAttribute('src');
      const { assetPublicPath } = apps.find(item => item.name === appName);
      const newSrc = /^(https?\:)?\/\//.test(src) ? src : `${assetPublicPath}${src.charAt(0) === '/' ? src.slice(1) : src}`;
      el.setAttribute('src', newSrc);
    });
  })
  next();
});

use(sandboxMidware);
use(microCodeMidware, { simple: false, ableLocationProxy: true });
use(interceptorMidware);
use(singleSpaMidware);

start({
  ignoreFileRule: ['s5.cnzz.com']
});