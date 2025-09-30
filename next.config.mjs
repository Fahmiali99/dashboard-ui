import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /^https?:.*\/_next\/static\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "static-resources",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },
        },
      },
      {
        urlPattern: /\/api\/.*$/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "api-cache",
          networkTimeoutSeconds: 10,
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24,
          },
        },
      },
      {
        urlPattern: /.*/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "general-cache",
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 60 * 60 * 24 * 7,
          },
        },
      },
    ],
    fallbacks: {
      document: "/_offline",
    },
  },
});
