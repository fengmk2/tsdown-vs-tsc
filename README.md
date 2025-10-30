# tsdown-vs-tsc

## Problem Description

When building a project using tsdown + unbundle, the output files lack the type declaration file `import './types.ts'`, whereas building with tsc will generate the type declaration files.

## Reproduce Build Output

```bash
npm run build
```

tsdown + bundle build output:
- Input: `src/index.ts` and dependencies
- Output: `dist-bundle/index.js` and `dist-bundle/index.d.ts`

tsdown + unbundle build output:
- Input: `src/index.ts` and dependencies
- Output: `dist-unbundle/index.js` and `dist-unbundle/index.d.ts`

tsc build output:
- Input: `src/index.ts` and dependencies
- Output: `dist-tsc/index.js` and `dist-tsc/index.d.ts`

The tsdown + unbundle build output is missing the types `import './types.ts'`.

```ts
// dist-unbundle/index.d.ts

//#region src/index.d.ts
declare function main(): void;
//#endregion
export { main };
```

```ts
// dist-tsc/index.d.ts

import './types.ts';
export declare function main(): void;
```

```ts
// dist-bundle/index.d.ts

import "./types-_8Ni1WEK.js";

//#region src/index.d.ts
declare function main(): void;
//#endregion
export { main };
```

## Solution

Set `sideEffects: true` in `tsdown.config.ts`.

See [this issue](https://github.com/rolldown/tsdown/issues/533#issuecomment-3465207879) for more details.

```ts
// tsdown.config.ts

export default defineConfig({
  entry: 'src/**/*.ts',
  dts: {
    sourcemap: true,
    sideEffects: true,
  },
});
```

This will force tsdown to include the type declaration files in the output.

```ts
// dist-unbundle/index.d.ts

import "./types.js";

//#region src/index.d.ts
declare function main(): void;
//#endregion
export { main };
//# sourceMappingURL=index.d.ts.map
```


## License

MIT License - see [LICENSE](LICENSE) file for details
