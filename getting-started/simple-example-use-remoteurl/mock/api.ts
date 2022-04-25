export default {
  '/api/remote-micro-apps': [
    {
      name: 'store',
      entry: 'https://render.alipay.com/p/w/occ-appstore/index.html',
      rules: {
        rule: '/store',
        container: '#microAppMountNode',
      },
    },
    {
      name: 'jackiechan',
      entry: 'https://jackiechan.com/',
      rules: {
        rule: '/jackiechan',
        container: '#microAppMountNode',
      },
    },
    {
      name: 'antd-pro',
      entry: 'https://preview.pro.ant.design/',
      rules: {
        rule: '/',
        container: '#microAppMountNode',
      },
    },
  ],
  'POST /api/**/*List': { code: 0, msg: '成功', result: [], totalNum: 0 },
  'POST /api/**/*': { code: -1, msg: '失败' },
};
