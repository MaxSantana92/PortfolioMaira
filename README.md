# Portfolio de Maira - Agrónoma

Portfolio profesional de Maira, especialista en agronomía y mapeo satelital.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Configuración del despliegue:

1. **GitHub Pages**: Asegúrate de que GitHub Pages esté habilitado en tu repositorio
2. **Source**: Configura GitHub Pages para usar "GitHub Actions" como fuente
3. **Workflow**: El archivo `.github/workflows/deploy.yml` se ejecutará automáticamente en cada push a la rama `main`

### URL del sitio:

- El sitio estará disponible en: `https://[tu-usuario].github.io/PortfolioMaira`

## 🧞 Comandos de desarrollo

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                               |
| :------------------ | :--------------------------------------------------- |
| `npm install`       | Instala las dependencias                             |
| `npm run dev`       | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`     | Construye el sitio de producción en `./dist/`        |
| `npm run preview`   | Previsualiza la construcción localmente              |
| `npm run astro ...` | Ejecuta comandos CLI de Astro                        |

## 🏗️ Estructura del proyecto

```text
/
├── public/
│   ├── favicon.svg
│   └── .nojekyll
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   └── Services.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── en/
│   │       └── index.astro
│   └── utils/
│       └── i18n.ts
├── .github/workflows/
│   └── deploy.yml
└── package.json
```

## 🌐 Internacionalización

El sitio soporta múltiples idiomas:

- Español (por defecto)
- Inglés

## 🎨 Tecnologías utilizadas

- **Astro**: Framework para sitios estáticos
- **Tailwind CSS**: Framework de CSS utilitario
- **TypeScript**: Tipado estático
- **GitHub Actions**: CI/CD y despliegue automático
