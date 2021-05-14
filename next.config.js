module.exports = {
  future: {
    webpack5: true,
  },
  async redirects() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Do not rewrite API routes
      {
        source: '/api/:any*',
        destination: '/api/:any*',
      },
      // Rewrite everything else to use `pages/app`
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};
