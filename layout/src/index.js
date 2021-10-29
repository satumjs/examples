// @ts-check
import { register, start, use } from '@satumjs/core';
import singleSpaMidware from '@satumjs/midware-single-spa';

register([{
  name: 'vue-todomvc',
  entry: 'https://todomvc.com/examples/vue/',
  // @ts-ignore
  history: 'hash',
  rules: {
    rule: '/',
    container: '.col-tb-offset-2',
    layout: '/post/404',
  },
}, {
  name: 'post-icatjs-micro',
  entry: 'https://vklife.fun/blog/404',
  rules: {
    rule: '/post/404',
    container: '#mountNode',
  }
}]);

use(singleSpaMidware);

start();
