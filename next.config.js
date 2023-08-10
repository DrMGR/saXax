/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other config options...
    output: "standalone", // Generate static HTML files for each route
    exportPathMap: async function () {
        // Your custom exportPathMap logic here
    },
};

module.exports = nextConfig;
