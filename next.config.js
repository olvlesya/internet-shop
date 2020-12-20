const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/internet-shop/out" : "",
  assetPrefix: isProd ? "https://olvlesya.github.io/internet-shop/out/" : "",
};
