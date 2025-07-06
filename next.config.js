/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the entire "experimental" block if it exists
  reactStrictMode: true,
  images: {
    domains: ['your-supabase-domain.supabase.co'], // Add your Supabase domain
  },
};

module.exports = nextConfig;
