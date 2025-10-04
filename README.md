# tsdown-vs-tsc

A TypeScript project demonstrating the use of **tsdown** for building TypeScript applications.

## About

This project showcases how to set up and build a TypeScript project using [tsdown](https://tsdown.vercel.app/), a modern TypeScript bundler powered by Rolldown.

## Project Structure

```
tsdown-vs-tsc/
├── src/
│   ├── index.ts      # Main entry point
│   └── utils.ts      # Utility functions
├── dist/             # Built output (generated)
├── package.json      # Project configuration
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Build

Build the project using tsdown:

```bash
npm run build
```

This will compile and bundle the TypeScript files from `src/` into `dist/index.js`.

### Run

Execute the built JavaScript file:

```bash
npm start
```

## Features

- ✅ TypeScript compilation with tsdown
- ✅ Fast bundling with Rolldown
- ✅ ES modules support
- ✅ Source code bundling

## Build Output

tsdown bundles all TypeScript files into a single optimized JavaScript file:
- Input: `src/index.ts` and dependencies
- Output: `dist/index.js`

## License

MIT License - see [LICENSE](LICENSE) file for details
