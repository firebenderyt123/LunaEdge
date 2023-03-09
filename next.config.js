const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".scss");
    config.resolve.alias["@api"] = path.join(__dirname, "src/api");
    config.resolve.alias["@images"] = path.join(__dirname, "src/assets/images");
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src/components"
    );
    config.resolve.alias["@config"] = path.join(__dirname, "src/config");
    config.resolve.alias["@pages"] = path.join(__dirname, "src/pages");
    config.resolve.alias["@store"] = path.join(__dirname, "src/store");
    config.resolve.alias["@styles"] = path.join(__dirname, "src/styles");

    return config;
  },
};
