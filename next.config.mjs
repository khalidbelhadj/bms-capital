/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "qhdmjokveswjhibvruek.supabase.co",
      },
    ],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
