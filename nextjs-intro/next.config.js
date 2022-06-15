/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['image.tmdb.org'],
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko`, // 메인 화면에서 API 키 숨기기
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=ko`, // 상세 화면에서 API 키 숨기기
      },
    ];
  },
};

module.exports = nextConfig;
