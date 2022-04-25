import { defineConfig } from 'umi';

export default defineConfig({
  mountElementId: 'mountNodeForDemo',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/*', component: '@/pages/index' }],
  fastRefresh: {},
});
