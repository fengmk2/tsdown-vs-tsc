import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/**/*.ts',
  dts: true,
  // FIXME: unbundle is not working as expected
  // unbundle: true,
  unused: {
    level: 'error',
  },
  exports: {
    devExports: true,
  },
});
