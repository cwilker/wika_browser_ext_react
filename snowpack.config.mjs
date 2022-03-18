/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  alia: {
    "@polkadot/wasm-crypto-wasm": "@polkadot/wasm-crypto-wasm/empty"
  },
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    knownEntrypoints: ["@polkadot/util", "@polkadot/networks", "@polkadot/util/packageInfo.js", "@polkadot/networks/packageInfo.js", "@polkadot/networks/interfaces" ]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    metaUrlPath: "snowpack",
  },
  exclude: ['**/widget/**/*']
};
