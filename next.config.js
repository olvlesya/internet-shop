const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/olvlesya/internet-shop/gh-pages/out/"
    : "",
};
