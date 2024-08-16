# Snake

## Run `npm install` to set all dependencies

### Open application in development mode

```
npm run dev
```

### Start development server

```
npm start
```

This command runs `vite` to start the development server. It provides fast, hot module replacement (HMR) for a smooth development experience, allowing you to see changes in real-time as you modify your code.

### Build the project

To build the project run

```
npm run build
```

This command first compiles the TypeScript code using the TypeScript compiler (`tsc -b`). This ensures type checking and generates necessary type declaration files. After successful compilation, it builds the project with Vite (`vite build`), creating an optimized production-ready bundle.

> Note: Running `tsc -b` ensures thorough type checking and may generate additional type files that `vite build` does not.
