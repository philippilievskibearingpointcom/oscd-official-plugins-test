export default {
  plugins: ['@snowpack/plugin-typescript'],
  packageOptions: {
    external: [
      '@web/dev-server-core',
      '@web/dev-server-esbuild',
      'esbuild',
      'crypto',
    ],
  },
  exclude: [
    '**/*.@(spec|test).@(js|mjs)',
    '**/test/**/*',
    '**/out-tsc/**/*',
    '**/.editorconfig',
    '**/.eslintrc.cjs',
    '**/.git/**/*',
    '**/.gitignore',
    '**/.idea/**/*',
    '**/.travis.yml',
    '**/package*',
    '**/tsconfig.json',
    '**/web-test-runner.config.mjs',
    '**/node_modules/**/*',
  ],
  workspaceRoot: '../../',
  mount: {
    '../../libs/openscd/open-scd': '/open-scd/',
    '../../libs/openscd/xml/src': '/xml/',
    '../../libs/openscd/core': '/core/',
    './': '/'
  },
  alias: {
    '@openscd/open-scd': '../../libs/openscd/open-scd/',
    '@openscd/core': '../../libs/openscd/core/',
    '@openscd/xml': '../../libs/openscd/xml/src/',
  }
};
