/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    react: {
      throwIfNamespace: false, // Disable JSX namespace error
    },
  },
};

module.exports = nextConfig;
