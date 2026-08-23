# Créditos de contenido

## Material propio de Soul La Academia

Logotipo, textos institucionales (misión, visión, programas), biografías de
docentes y fotografías de clases, estudiantes y conciertos.

| Archivo | Uso |
| --- | --- |
| `assets/images/logo.png` | Logotipo y favicon |
| `assets/images/og-image.jpg` | Vista previa al compartir el enlace en redes |
| `assets/images/hero-*.webp` | Banner rotativo del inicio |
| `assets/images/collage*.webp` | Collage de la sección "Nosotros" |
| `assets/images/curso-*.webp`, `teclado.webp` | Tarjetas de programas e instrumentos |
| `assets/images/about-portrait.webp` | Retrato de la sección "Nosotros" |
| `assets/images/teacher-*.webp` | Fotos del equipo docente |

**Autorizaciones de uso de imagen:** todas las personas que aparecen en las
fotografías cuentan con permiso firmado, por ellas mismas o por sus padres o
acudientes en el caso de menores de edad.

## Fotografías de terceros

Seis instrumentos no tenían foto propia de la academia. Se usan imágenes de
[Pexels](https://www.pexels.com), bajo la
[licencia de Pexels](https://www.pexels.com/license/), que permite uso
comercial sin atribución obligatoria. La atribución se incluye igual por
buena práctica.

| Archivo | Fuente |
| --- | --- |
| `assets/images/instruments/ukelele.webp` | Pexels |
| `assets/images/instruments/flauta.webp` | Pexels |
| `assets/images/instruments/saxofon.webp` | Pexels |
| `assets/images/instruments/violin.webp` | Pexels |
| `assets/images/instruments/percusion.webp` | Pexels |
| `assets/images/instruments/teoria.webp` | Pexels |

> **Pendiente:** reemplazar estas seis imágenes por fotos reales de clases de la
> academia cuando estén disponibles. Gana coherencia visual y credibilidad.

## Procesamiento de imágenes

Todas las fotografías están en **WebP**, redimensionadas al doble del tamaño
en que se muestran en pantalla (suficiente para pantallas retina) y comprimidas
con calidad 80. El conjunto pasó de 3,62 MB a 0,85 MB, un 77 % menos, sin
diferencia visible.

Dos excepciones deliberadas:

- `logo.png` — es un gráfico plano, no una fotografía. Cuantizado a 128 colores
  pesa 12 KB, menos que su propia versión WebP, y sirve además como favicon,
  donde el PNG tiene soporte universal.
- `og-image.jpg` — la imagen de vista previa social se mantiene en JPEG a
  1200 × 630 px, el tamaño estándar de Open Graph. WhatsApp y Facebook aún
  tienen soporte irregular de WebP en `og:image`, y es justo la imagen que no
  puede fallar.

Los archivos originales en alta resolución quedaron en `assets/_originales/`,
excluidos del repositorio por `.gitignore`, por si hace falta recortar o
reexportar en el futuro.

## Fuentes tipográficas

[Rajdhani](https://fonts.google.com/specimen/Rajdhani) y
[Poppins](https://fonts.google.com/specimen/Poppins), servidas desde Google
Fonts bajo SIL Open Font License 1.1.

## Video

Los videos de conciertos son embeds del canal oficial de YouTube
[@soullaacademia5170](https://www.youtube.com/@soullaacademia5170).
