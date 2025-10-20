/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // nécessaire pour GitHub Pages
    images: {
        unoptimized: false, // désactive l’optimisation d’images côté serveur
    },
    basePath: '/marketflow', // le nom de ton dépôt GitHub
    assetPrefix: '/marketflow/', // préfixe pour les ressources
};

module.exports = nextConfig;
