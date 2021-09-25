import { register, start, use } from '@satumjs/core';
import midwareSingleSpa from '@satumjs/midware-single-spa';

register({
  name: 'vue-todomvc',
  entry: 'https://todomvc.com/examples/vue/',
  history: 'hash',
  rules: {
    rule: '/',
    container: '#mountNode'
  },
});

use(midwareSingleSpa);

start();