const { merge } = require('webpack-merge');

const loadPresets = (presets) => {
  /**@type {string[]} */
  const presetList = presets
    .split(',')
    .filter((presetName) => presetName !== '');
  const configList = presetList.map((presetName) =>
    require(`./presets/webpack.${presetName}`)()
  );
  return merge({}, ...configList);
};

module.exports = loadPresets;
