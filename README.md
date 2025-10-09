# tsdown-vs-tsc

## Problem Description

When building a project using tsdown + unbundle, the output files lack the type declaration file `import './types.ts'`, whereas building with tsc will generate the type declaration files.

## Reproduce Build Output

```bash
npm run build
```

tsdown + bundle build output:
- Input: `src/index.ts` and dependencies
- Output: `dist/index.js` and `dist/index.d.ts`

tsdown + unbundle build output:
- Input: `src/index.ts` and dependencies
- Output: `dist-unbundle/index.js` and `dist-unbundle/index.d.ts`

tsc build output:
- Input: `src/index.ts` and dependencies
- Output: `dist-tsc/index.js` and `dist-tsc/index.d.ts`

The tsdown build output is missing the types `import './types.ts'`.

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


## License

MIT License - see [LICENSE](LICENSE) file for details
