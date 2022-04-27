import { register, start, use, MidwareName, corsRuleLabel } from '@satumjs/core';


use((system, _, next) => {
  system.set(MidwareName.urlOption, { corsRule: `https://thingproxy.freeboard.io/fetch/${corsRuleLabel}` });
  system.set(MidwareName.code, (source, fileUrl) => {
    // rewrite css file content, you can process other type file in processCode midware
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
