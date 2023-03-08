/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    exportPathMap: async function () {
        return {
            "/": { page: "/" },
            "/about": { page: "/about" }
        };
    },
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
