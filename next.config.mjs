import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        outputFileTracingRoot: path.join(process.cwd(), 'src/app'),
    },
};
  
export default nextConfig;