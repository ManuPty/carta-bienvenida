# Para ti 💌 — carta digital

Una pequeña página romántica construida con React, Tailwind CSS y Framer Motion.

---

## 1. Instalar dependencias

Necesitas tener [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
npm install
```

## 2. Ejecutar el proyecto en tu computadora

```bash
npm run dev
```

Esto abrirá el proyecto en `http://localhost:5173`. Los cambios que hagas se ven al instante.

## 3. Agregar sus fotografías

1. Coloca tus imágenes dentro de la carpeta `public/images/`.
2. Ábrelas o renómbralas como: `nosotros-1.jpg`, `nosotros-2.jpg`, `nosotros-3.jpg`, `nosotros-4.jpg` (o el nombre que prefieras).
3. Edita el archivo `src/data/memories.js` para que coincida con tus nombres de archivo y escribe tus propias frases:

```js
export const memories = [
  {
    image: '/images/nosotros-1.jpg',
    caption: 'Un día que nunca voy a olvidar.',
    size: 'tall', // "tall" | "wide" | "normal"
  },
  // agrega tantas fotos como quieras...
]
```

Si todavía no tienes una foto lista, no pasa nada: la página muestra automáticamente un marcador elegante mientras tanto.

## 4. Cambiar el texto de la carta

Abre `src/components/Letter.jsx` y edita el arreglo `LETTER_PARAGRAPHS` al principio del archivo:

```js
const LETTER_PARAGRAPHS = [
  'Aquí va el primer párrafo de tu carta...',
  'Aquí va el segundo párrafo...',
]
```

También puedes cambiar la firma editando la constante `SIGNATURE` justo debajo.

## 5. Cambiar los colores

Todos los colores están centralizados en `tailwind.config.js`, dentro de `theme.extend.colors`:

```js
colors: {
  background: '#FFF7F8',
  'pink-light': '#FCE4EC',
  pink: '#F8BBD0',
  rose: '#E91E63',
  'deep-rose': '#AD1457',
  wine: '#7F1D1D',
  cream: '#FFFDF9',
}
```

Cambia cualquiera de estos valores hexadecimales y se actualizará en toda la página automáticamente.

## 6. Cambiar las frases de "Nuestros recuerdos"

Se editan en el mismo archivo `src/data/memories.js`, en la propiedad `caption` de cada foto.

## 7. Música (opcional)

Por defecto la página no incluye reproductor de música. Si quieres agregar una canción de fondo con un botón para activarla/desactivarla (nunca en automático), dímelo y te agrego el componente.

## 8. Publicar la página

La forma más sencilla es con [Vercel](https://vercel.com) o [Netlify](https://netlify.com), ambos gratuitos:

**Con Vercel:**
```bash
npm install -g vercel
vercel
```

**Con Netlify:**
```bash
npm run build
# luego arrastra la carpeta "dist" a https://app.netlify.com/drop
```

Ambos te darán un enlace (URL) que puedes compartir directamente.

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Hero.jsx            → portada
│   ├── Letter.jsx          → la carta
│   ├── Flower.jsx          → la rosa en SVG
│   ├── Memories.jsx        → galería de recuerdos
│   ├── FinalMessage.jsx    → frase final
│   └── FloatingPetals.jsx  → pétalos flotando de fondo
├── data/
│   └── memories.js         → tus fotos y frases
├── App.jsx
├── main.jsx
└── index.css
```
