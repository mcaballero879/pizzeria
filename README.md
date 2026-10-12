# Pizzería Libre · 4 Esquinas L

Landing page responsive creada con React + Vite, componentes separados y una hoja CSS por sección.

## Requisitos
- Node.js 18 o superior
- npm

## Ejecutar en desarrollo
```bash
npm install
npm run dev
```

## Generar versión de producción
```bash
npm run build
npm run preview
```
El resultado compilado queda en `dist/`, listo para desplegar en Netlify, Vercel o cualquier hosting estático compatible.

## Personalización antes de publicar
1. Cambiar el enlace `https://wa.me/5491112345678` por el WhatsApp comercial real en los componentes donde aparece.
2. Reemplazar las direcciones ilustrativas de `src/components/Branches/Branches.jsx` por las sucursales reales.
3. Cambiar los enlaces sociales de ejemplo por los perfiles oficiales.
4. Reemplazar las imágenes de `public/images/` por fotografías originales de la pizzería. Las imágenes incluidas son recortes de la referencia visual adjunta, para que el proyecto funcione de inmediato como maqueta; algunas conservan detalles visuales propios de esa referencia.

## Estructura
```text
src/
  App.jsx
  main.jsx
  styles/global.css
  components/
    Header/        Header.jsx + Header.css
    Hero/          Hero.jsx + Hero.css
    Benefits/      Benefits.jsx + Benefits.css
    Story/         Story.jsx + Story.css
    MenuCategories/ MenuCategories.jsx + MenuCategories.css
    Branches/      Branches.jsx + Branches.css
    Social/        Social.jsx + Social.css
    FinalCTA/      FinalCTA.jsx + FinalCTA.css
    Footer/        Footer.jsx + Footer.css
public/images/    imágenes locales de la maqueta
```
