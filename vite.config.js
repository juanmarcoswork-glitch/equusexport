import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/equusexport/',
  plugins: [tailwindcss()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        // Spanish (default)
        main: resolve(__dirname, 'index.html'),
        servicios: resolve(__dirname, 'servicios/index.html'),
        exportacion: resolve(__dirname, 'servicios/exportacion-internacional.html'),
        transporte: resolve(__dirname, 'servicios/transporte-terrestre.html'),
        cuarentena: resolve(__dirname, 'servicios/cuarentena.html'),
        nosotros: resolve(__dirname, 'sobre-nosotros.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        blogPost: resolve(__dirname, 'blog/post.html'),
        autores: resolve(__dirname, 'autores/index.html'),
        autor: resolve(__dirname, 'autores/autor.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        avisoLegal: resolve(__dirname, 'aviso-legal.html'),
        privacidad: resolve(__dirname, 'politica-de-privacidad.html'),
        cookies: resolve(__dirname, 'politica-de-cookies.html'),
        notFound: resolve(__dirname, '404.html'),

        // English
        enHome: resolve(__dirname, 'en/index.html'),
        enServices: resolve(__dirname, 'en/services/index.html'),
        enExport: resolve(__dirname, 'en/services/international-export.html'),
        enQuarantine: resolve(__dirname, 'en/services/quarantine.html'),
        enTransport: resolve(__dirname, 'en/services/land-transport.html'),
        enAbout: resolve(__dirname, 'en/about-us.html'),
        enContact: resolve(__dirname, 'en/contact.html'),
        enBlog: resolve(__dirname, 'en/blog/index.html'),
        enBlogPost: resolve(__dirname, 'en/blog/post.html'),
        enAuthors: resolve(__dirname, 'en/authors/index.html'),
        enAuthor: resolve(__dirname, 'en/authors/author.html'),
        enLegal: resolve(__dirname, 'en/legal-notice.html'),
        enPrivacy: resolve(__dirname, 'en/privacy-policy.html'),
        enCookies: resolve(__dirname, 'en/cookie-policy.html'),
        enNotFound: resolve(__dirname, 'en/404.html'),

        // Arabic
        arHome: resolve(__dirname, 'ar/index.html'),
        arServices: resolve(__dirname, 'ar/services/index.html'),
        arExport: resolve(__dirname, 'ar/services/international-export.html'),
        arQuarantine: resolve(__dirname, 'ar/services/quarantine.html'),
        arTransport: resolve(__dirname, 'ar/services/land-transport.html'),
        arAbout: resolve(__dirname, 'ar/about-us.html'),
        arContact: resolve(__dirname, 'ar/contact.html'),
        arBlog: resolve(__dirname, 'ar/blog/index.html'),
        arBlogPost: resolve(__dirname, 'ar/blog/post.html'),
        arAuthors: resolve(__dirname, 'ar/authors/index.html'),
        arAuthor: resolve(__dirname, 'ar/authors/author.html'),
        arLegal: resolve(__dirname, 'ar/legal-notice.html'),
        arPrivacy: resolve(__dirname, 'ar/privacy-policy.html'),
        arCookies: resolve(__dirname, 'ar/cookie-policy.html'),
        arNotFound: resolve(__dirname, 'ar/404.html'),
      },
    },
  },
});
