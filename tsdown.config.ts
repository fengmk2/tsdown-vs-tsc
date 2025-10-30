import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/**/*.ts',
  dts: {
    sourcemap: true,
    // FIX https://github.com/rolldown/tsdown/issues/533#issuecomment-3465207879
    sideEffects: true,
  },
  // FIXME: unbundle is not working as expected
  // unbundle: true,
  // unused: {
  //   level: 'error',
  // },
  exports: {
    devExports: true,
  },
});
