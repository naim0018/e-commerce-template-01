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
            hostname:"pexels.com"
        }
        ]
    }

};

export default nextConfig;
