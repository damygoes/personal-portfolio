/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Sanity image CDN (covers, screens, figures, portrait). Object form so
      // the builder's query (`?auto=format`, crops) is allowed: `new URL(...)`
      // patterns only match URLs without a query string.
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      // Portrait referenced by the fixtures
      new URL("https://www.damilolabada.com/**"),
    ],
  },
};

export default nextConfig;
