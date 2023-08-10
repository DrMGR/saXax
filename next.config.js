/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other config options...
    output: {
        // Generate static HTML files for each route
        output: "standalone",
        export: true,
    },
};

