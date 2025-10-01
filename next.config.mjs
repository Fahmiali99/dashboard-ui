import withPWAInit from 'next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  
  buildExcludes: [
    /middleware-manifest\.json$/,
    /_buildManifest\.js$/,
    /_ssgManifest\.js$/,
  ],
  
  manifestTransforms: [(manifest) => {
    return {
      manifest: manifest.filter(entry => 
        !entry.url.includes('dynamic-css-manifest.json')
      ),
    };
  }],
});

export default withPWA({
  reactStrictMode: true,
});