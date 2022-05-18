import { defineConfig } from 'umi';

export default defineConfig({
  mountElementId: 'hostMountNode',
  nodeModulesTransform: { type: 'none' },
  routes: [{ path: '/*', component: '@/pages/index' }],
  fastRefresh: {},
});
