import { start, use, MidwareName, crossRuleLabel, NextFn } from '@satumjs/core';
import {
  simpleSandboxMidware,
  interceptorMidware,
} from '@satumjs/simple-midwares';
import { IMicroApp, MidwareSystem } from '@satumjs/types';

use((system, _, next) => {
  system.set(MidwareName.urlOption, {
    whiteList: ['/api', 'gw.alipayobjects.com'],
    crossRule: `https://ptgproxy-office.alipay.net/proxy?target=${crossRuleLabel}`,
  });
  next();
});

use((sys: MidwareSystem, apps: IMicroApp[], next: NextFn) => {
  sys.set(MidwareName.domChange, (appName: string, mountNode: HTMLElement) => {
    mountNode.querySelectorAll('img').forEach((el) => {
      const src = el.getAttribute('src') || '';
      const { assetPublicPath } =
        apps.find((item) => item.name === appName) || {};
      const newSrc = /^(https?\:)?\/\//.test(src)
        ? src
        : `${assetPublicPath}${src.charAt(0) === '/' ? src.slice(1) : src}`;
      el.setAttribute('src', newSrc);
    });
    return appName;
  });
  next();
});

use(simpleSandboxMidware);
use(interceptorMidware);

start({ remoteUrl: '/api/remote-micro-apps' });
