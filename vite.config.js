const path = require('path')
// vite.config.js # or vite.config.ts

module.exports = {
  hostname: '127.0.0.1',
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  base: './'
  // 反向代理
}