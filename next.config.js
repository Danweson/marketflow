/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: isProd && 'export', // nécessaire pour GitHub Pages
    images: {
        unoptimized: isProd ? true : false, // désactive l’optimisation d’images côté serveur
    },
    basePath: isProd ? '/marketflow' : '',
  assetPrefix: isProd ? '/marketflow/' : '',
    // basePath: '/marketflow', // le nom de ton dépôt GitHub
    // assetPrefix: '/marketflow/', // préfixe pour les ressources
};

module.exports = nextConfig;
