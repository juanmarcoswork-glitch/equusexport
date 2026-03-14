import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/equusexport/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
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
      },
    },
  },
});
```

---

### Paso 2 — Hacer el build en Git Bash
```
npm run build
```

Esto genera la carpeta `dist/` con todo compilado y optimizado.

---

### Paso 3 — Subir el dist a GitHub
```
git add dist -f
git commit -m "build: add dist for github pages"
git push
