// @ts-check
import '@babel/polyfill';
import { register, start, use, MidwareName, corsRuleLabel } from '@satumjs/core';
import theadOccMidware from '@satumjs/midware-thead-occ';

register([{
  name: 'react',
  entry: 'http://localhost:3000/',
  rules: {
    rule: '/',
    container: '#mountNode'
  },
}, {
  name: 'npm-satumjs',
  entry: 'https://www.npmjs.com/~satumjs',
  rules: {
    rule: '/npm-satumjs',
    container: '#subMountNode', //#mountNode
    layout: '/invoices'
  }
}]);

use((sys, apps, next) => {
  sys.set(MidwareName.urlOption, { corsRule: `https://thingproxy.freeboard.io/fetch/${corsRuleLabel}` });
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

use(theadOccMidware, { softCache: false });

start();