const { merge } = require("webpack-merge");
const webPackConfig = require("./webpack.common");

module.exports = webPackConfig("production");
