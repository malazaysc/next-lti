/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/lti',
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                    { key: "X-Frame-Options", value: "ALLOW-FROM https://*.instructure.com"},
                    { key: "Content-Security-Policy", value: "frame-ancestors 'self' https://*.instructure.com"},
                    { key: "X-Content-Type-Options", value: "nosniff"},
                ]
            }
        ]
    },
    experimental: {
        serverActions: {
            allowedOrigins: ['https://canvas.instructure.com'],
            allowedForwardedHosts: ['https://canvas.instructure.com'],
        }
    }
};

export default nextConfig;
