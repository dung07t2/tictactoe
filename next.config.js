/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: process.env.BUILD_DIR
};

module.exports = nextConfig;
