const withMDX = require("@next/mdx")();

module.exports = withMDX({
  extension: /\.(md|mdx)$/,
});
