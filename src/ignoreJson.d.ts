// Using resolveJsonModule with TypeScript and importing package.json causes issues because it causes rootDir to change to . instead of ./src, which means generated type declarations get output in dist/src rather than just dist. Since rollup inserts JSON directly we can just ignore JSON modules in TypeScript.
declare module "*.json";
