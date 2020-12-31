/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/*
 * Set the PrismJS code highlighting themes
 * See: https://prismjs.com/
 */
require("prism-themes/themes/prism-vsc-dark-plus.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

exports.onInitialClientRender = () => {
  require("typeface-nunito");
};
