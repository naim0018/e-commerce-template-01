/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[
        {
            protocol:'https',
            hostname:"i.ibb.co"
        },
        {
            protocol:'https',
            hostname:"www.pexels.com",
        },
        {
            protocol:'https',
            hostname:"example.com",
        }
        ]
    }

};

export default nextConfig;
