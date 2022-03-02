const { withFaust } = require("@faustjs/next");

const nextConfig = {
  images: {
    domains: ["plyrvideo.local"],
  },
};

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust(nextConfig);

// module.exports = {
//   images: {
//     domains: ["plyrvideo.local"],
//   },
// };
