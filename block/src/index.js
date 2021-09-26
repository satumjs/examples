import { register, start } from '@satumjs/core';

register([{
  name: 'seeconf',
  entry: 'https://cnpmjs.org/package/@icatjs/micro',
  rules: {
    rule: '/',
    container: '#mountNode',
    blocks: [{
      path: '/post/icatjs-micro',
      container: '.yue',
    }]
  },
}, {
  name: 'post-icatjs-micro',
  entry: 'https://vklife.fun/blog/archives/62/',
  rules: {
    rule: '/post/icatjs-micro',
    container: '#mountNode',
  }
}]);

start();