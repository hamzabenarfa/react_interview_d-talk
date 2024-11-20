/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/movie',
                permanent: true,
            },
        ];
    },
    typescript: {
        ignoreBuildErrors: true,
      },
};

export default nextConfig;
