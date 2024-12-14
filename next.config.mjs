/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: 8 * 1024 * 1024 * 2,
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4200',
                pathname: '/api/**'
            }
        ]
    }
};

export default nextConfig;
