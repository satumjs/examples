import { register, start } from '@satumjs/core';

register({
  name: 'seeconf',
  entry: 'https://seeconf.antfin.com/',
  rules: {
    rule: '/',
    container: '#mountNode'
  },
});

start();