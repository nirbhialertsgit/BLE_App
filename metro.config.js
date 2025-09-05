// @ts-check
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('metro-config').ConfigT} */
module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  config.resolver.unstable_enablePackageExports = true;
  return config;
})();
