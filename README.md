# FONLES EXPO 2025 - Edición Ambato

Landing page oficial para el lanzamiento de Alhelí en Ambato, Ecuador.

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📦 Deploy

### Vercel
1. Conecta tu repositorio a Vercel
2. El archivo `vercel.json` está configurado automáticamente
3. Deploy automático en cada push

### Netlify
1. Conecta tu repositorio a Netlify
2. El archivo `netlify.toml` está configurado automáticamente
3. Deploy automático en cada push

### GitHub Pages
1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu repositorio
3. Configura GitHub Pages para usar la carpeta `dist/`

## 🎨 Características

- **Responsive Design**: Optimizado para todos los dispositivos
- **Performance**: Carga rápida y optimizada
- **SEO**: Meta tags y estructura optimizada
- **Accesibilidad**: Cumple estándares de accesibilidad web

## 🛠️ Tecnologías

- **Astro**: Framework web moderno
- **React**: Para componentes interactivos
- **CSS**: Estilos personalizados y responsive
- **PostCSS**: Procesamiento de CSS

## 📱 Compatibilidad

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── layouts/        # Layouts de página
├── pages/          # Páginas de la aplicación
├── assets/         # Imágenes y recursos
└── styles/         # Estilos globales
```

## 🚨 Solución de Problemas

### El diseño no se mantiene en deploy
1. Verifica que todos los assets estén en la carpeta `public/`
2. Asegúrate de que las rutas de imágenes usen rutas absolutas (`/imagen.png`)
3. Ejecuta `npm run build` localmente para verificar errores
4. Revisa la consola del navegador para errores de CSS

### Assets no cargan
1. Verifica que los archivos estén en la carpeta correcta
2. Usa rutas absolutas para assets estáticos
3. Verifica la configuración de la plataforma de deploy

## 📞 Soporte

Para problemas técnicos, contacta al equipo de desarrollo.