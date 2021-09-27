import { register, start, use } from '@satumjs/core';


use((system, _, next) => {
  system.set('processCode', (source, fileUrl) => {
    // rewrite css file content, you can process other type file in processCode midware
    if (fileUrl.includes('.css')) {
      return 'body{font-size: 12px; color: red}';
    }
    return source;
  });
  next();
});

use((system, _, next) => {
  system.set('processUrl', (source, fileUrl) => {
    // rewrite css file content, you also can process other type file in processCode midware
    if (fileUrl.includes('.css')) {
      return 'body{font-size: 12px; color: red}';
    }
    return source;
  });
  next();
});

register([
  {
    name: 'satum',
    entry: 'http://www.firefox.com.cn',
    rules: [{ rule: '/', container: '#appMountNodeAndDoNotCover' }],
  },
]);

start();
