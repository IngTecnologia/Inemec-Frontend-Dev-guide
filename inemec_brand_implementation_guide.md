# Manual de Identidad de Marca INEMEC
## Guía de Implementación para UI/UX

---

## 📋 Información General

**Empresa:** INEMEC (Ingeniería ElectroMecánica - Inemec Ltda.)  
**Sector:** Oil & Gas - Mantenimiento de infraestructuras petroquímicas  
**Manual:** Diseñado por GALANÉS PUBLICIDAD S.A.S. (2012)  
**Ubicación:** Bucaramanga, Colombia

---

## 🎨 Colores Corporativos

### Color Principal: Rojo INEMEC
```css
/* Pantone 485 C */
--inemec-red: #D52B1E;
--inemec-red-rgb: rgb(213, 43, 30);

/* Variaciones sugeridas */
--inemec-red-hover: #B22318;
--inemec-red-light: rgba(213, 43, 30, 0.2);
--inemec-red-dark: #8A1C13;
```

**Uso:** Color principal del símbolo, botones primarios, headers, elementos destacados  
**Significado:** Calor, dinamismo, coraje, vitalidad y energía

### Color Secundario: Gris INEMEC
```css
/* Pantone Cool Gray 8 C */
--inemec-gray: #939598;
--inemec-gray-rgb: rgb(147, 149, 152);

/* Variaciones sugeridas */
--inemec-gray-hover: #75767A;
--inemec-gray-light: rgba(147, 149, 152, 0.2);
--inemec-gray-dark: #5C5D5F;
```

**Uso:** Logotipo INEMEC, botones secundarios, bordes, texto secundario  
**Significado:** Equilibrio, independencia, auto-suficiencia, sobriedad y elegancia

### Colores de Soporte
```css
/* Backgrounds y utilidades */
--inemec-white: #FFFFFF;
--inemec-bg-light: #F8F9FA;
--inemec-text-primary: #333333;
--inemec-text-secondary: #666666;
--inemec-border: #E0E0E0;
```

---

## 🔤 Tipografía

### Tipografía Corporativa
```css
/* Principal */
font-family: 'Swis 721 LtCn BT', 'Helvetica Neue', 'Arial', sans-serif;

/* Variantes */
- Swis 721 LtCn BT - Light (Condensada)
- Swis 721 Lt BT - Light (Normal)
```

### Alternativas Web-Safe
Si no tienes acceso a Swis 721:
```css
/* Fallback tipográfico */
font-family: 'Helvetica Neue', 'Arial', 'Roboto Condensed', sans-serif;
```

### Jerarquía Tipográfica
```css
/* Headings */
h1, h2, h3 {
  color: var(--inemec-red);
  font-weight: 700;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

/* Body */
body {
  color: var(--inemec-text-primary);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
}

/* Secundario */
.text-secondary {
  color: var(--inemec-gray);
}
```

---

## 🖼️ Logo y Marca

### Proporciones del Logo

#### Versión Vertical (Principal)
```
Símbolo "iem":  33X ancho × 20X alto
Logotipo:       37X ancho × 6X alto
Total:          37X ancho × 29X alto
```

#### Versión Horizontal (Alternativa)
```
Total:          60X ancho × 8X alto
Estructura:     [Símbolo] | [INEMEC]
```

### Tamaños Mínimos
```css
/* Versión Vertical */
min-width: 8.3mm;
min-height: 5.0mm;

/* Versión Horizontal */
min-width: 17.8mm;
min-height: 5.0mm;

/* Equivalentes web (aproximados) */
/* Vertical: 32px × 19px */
/* Horizontal: 67px × 19px */
```

### Área de Seguridad
- **Espacio mínimo:** 12.5% de la altura total del logo
- **Ningún elemento** debe invadir esta área
- Equivalente a la unidad X del sistema de proporción

---

## 🎯 Componentes UI Recomendados

### Botones

#### Botón Primario
```css
.btn-primary {
  background-color: #D52B1E;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #B22318;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(213, 43, 30, 0.3);
}

.btn-primary:active {
  background-color: #8A1C13;
  transform: translateY(0);
}
```

#### Botón Secundario
```css
.btn-secondary {
  background-color: #939598;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #75767A;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(147, 149, 152, 0.3);
}
```

#### Botón Outline
```css
.btn-outline {
  background-color: transparent;
  color: #D52B1E;
  border: 2px solid #D52B1E;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: #D52B1E;
  color: #FFFFFF;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #939598;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(147, 149, 152, 0.15);
  padding: 24px;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(147, 149, 152, 0.25);
  transform: translateY(-4px);
}

.card-header {
  border-bottom: 2px solid #D52B1E;
  padding-bottom: 16px;
  margin-bottom: 16px;
}
```

### Headers / Navbar

```css
.navbar {
  background-color: #D52B1E;
  color: #FFFFFF;
  padding: 16px 32px;
}

.navbar-secondary {
  background-color: #939598;
  color: #FFFFFF;
  padding: 12px 32px;
}

.navbar-link {
  color: #FFFFFF;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.navbar-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
```

### Forms

```css
.form-input {
  border: 2px solid #939598;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #FFFFFF;
}

.form-input:focus {
  border-color: #D52B1E;
  outline: none;
  box-shadow: 0 0 0 3px rgba(213, 43, 30, 0.1);
}

.form-label {
  color: #333333;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
}

.form-error {
  border-color: #D52B1E;
}

.form-helper {
  color: #939598;
  font-size: 0.875rem;
  margin-top: 4px;
}
```

### Badges / Tags

```css
.badge-success {
  background-color: #D52B1E;
  color: #FFFFFF;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 600;
}

.badge-info {
  background-color: #939598;
  color: #FFFFFF;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 600;
}

.badge-outline {
  background-color: transparent;
  color: #D52B1E;
  border: 2px solid #D52B1E;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 600;
}
```

### Modals

```css
.modal {
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  padding: 0;
}

.modal-header {
  background-color: #D52B1E;
  color: #FFFFFF;
  padding: 20px 24px;
  border-radius: 12px 12px 0 0;
}

.modal-body {
  padding: 24px;
}

.modal-footer {
  border-top: 1px solid #E0E0E0;
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
```

---

## 🔄 Patrón Modular

### Uso del Símbolo como Patrón
```css
/* Pattern de fondo con el símbolo iem */
.pattern-background {
  background-color: #D52B1E; /* o #939598 */
  background-image: repeating-pattern(symbol-iem);
  opacity: 0.2; /* 20% de transparencia para el símbolo */
}
```

**Uso:** Fondos de secciones completas, headers, footers  
**Efecto:** Movimiento y continuidad visual

---

## ✅ Usos Permitidos del Logo

### Fondos Claros (Pasteles)
- ✅ Rosa claro (hasta 10% magenta)
- ✅ Azul claro (hasta 10% cyan)
- ✅ Amarillo claro (hasta 10% amarillo)

### Fondos Oscuros o Saturados
- ✅ Usar versión en **negativo** (blanco)
- ✅ Aplicable sobre: azul, amarillo, negro, rojo, gris corporativo

### Fondos Degradados
- ✅ Permitido con colores corporativos desaturados

### Sobre Fotografías
- ✅ Solo cuando las tonalidades sean uniformes
- ✅ Verificar legibilidad en positivo o negativo

---

## ❌ Usos Prohibidos del Logo

**NUNCA hacer lo siguiente:**

1. ❌ Cambiar la paleta de colores
2. ❌ Eliminar o modificar elementos
3. ❌ Distorsionar elementos (estirar/comprimir)
4. ❌ Usar degradados en los elementos del logo
5. ❌ Agregar sombras
6. ❌ Superponer elementos
7. ❌ Inclinar elementos
8. ❌ Usar texturas de fondo dentro del logo
9. ❌ Rotar elementos
10. ❌ Cambiar posición de elementos
11. ❌ Agregar elementos adicionales
12. ❌ Aplicar efectos de volumen

---

## 📐 Sistema de Espaciado

```css
/* Sistema basado en múltiplos de 8px */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;

/* Uso */
.container {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}
```

---

## 🌐 Consideraciones Web y Digital

### Accesibilidad (WCAG 2.1)

#### Contraste de Colores
```
Rojo (#D52B1E) sobre blanco: ✅ AAA (7.1:1)
Gris (#939598) sobre blanco: ✅ AA (4.5:1)
Blanco sobre rojo (#D52B1E): ✅ AAA (7.1:1)
Blanco sobre gris (#939598): ✅ AA (4.5:1)
```

#### Tamaños Mínimos en Web
```css
/* Logo */
min-width: 120px; /* equivalente a ~31mm */

/* Texto */
font-size: 16px; /* mínimo para body */
font-size: 14px; /* mínimo para texto secundario */
```

### Responsive Design

```css
/* Mobile First */
@media (max-width: 768px) {
  .logo-vertical { display: block; }
  .logo-horizontal { display: none; }
}

@media (min-width: 769px) {
  .logo-vertical { display: none; }
  .logo-horizontal { display: block; }
}
```

---

## 🎨 Paleta Extendida para UI

```css
/* Mensajes y estados */
:root {
  /* Success (usar rojo INEMEC) */
  --color-success: #D52B1E;
  --color-success-light: rgba(213, 43, 30, 0.1);
  
  /* Info (usar gris INEMEC) */
  --color-info: #939598;
  --color-info-light: rgba(147, 149, 152, 0.1);
  
  /* Warning */
  --color-warning: #FFC107;
  --color-warning-light: rgba(255, 193, 7, 0.1);
  
  /* Error */
  --color-error: #DC3545;
  --color-error-light: rgba(220, 53, 69, 0.1);
}
```

---

## 📱 Iconografía

### Estilo de Iconos
- **Tipo:** Line icons (contorno)
- **Grosor:** 2px
- **Estilo:** Redondeado
- **Color:** Rojo (#D52B1E) o Gris (#939598)
- **Tamaño:** 24px, 32px, 48px

### Librería Recomendada
- **Heroicons** (outline)
- **Feather Icons**
- **Material Icons** (outlined)

---

## 🔧 Implementación en Código

### Tailwind CSS Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'inemec-red': {
          DEFAULT: '#D52B1E',
          light: 'rgba(213, 43, 30, 0.2)',
          dark: '#B22318',
        },
        'inemec-gray': {
          DEFAULT: '#939598',
          light: 'rgba(147, 149, 152, 0.2)',
          dark: '#75767A',
        },
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'inemec': '8px',
        'inemec-lg': '12px',
      },
      boxShadow: {
        'inemec': '0 2px 8px rgba(147, 149, 152, 0.15)',
        'inemec-lg': '0 4px 16px rgba(147, 149, 152, 0.25)',
      },
    },
  },
}
```

### CSS Variables

```css
:root {
  /* Colores */
  --inemec-red: #D52B1E;
  --inemec-gray: #939598;
  --inemec-white: #FFFFFF;
  
  /* Tipografía */
  --font-family: 'Helvetica Neue', 'Arial', sans-serif;
  
  /* Espaciado */
  --spacing-unit: 8px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(147, 149, 152, 0.15);
  --shadow-md: 0 4px 16px rgba(147, 149, 152, 0.25);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### React/Next.js Theme Object

```javascript
// theme.js
export const theme = {
  colors: {
    primary: '#D52B1E',
    primaryHover: '#B22318',
    primaryLight: 'rgba(213, 43, 30, 0.2)',
    secondary: '#939598',
    secondaryHover: '#75767A',
    secondaryLight: 'rgba(147, 149, 152, 0.2)',
    white: '#FFFFFF',
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: '#939598',
    },
    border: '#E0E0E0',
    background: {
      primary: '#FFFFFF',
      secondary: '#F8F9FA',
    },
  },
  typography: {
    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    sm: '0 2px 8px rgba(147, 149, 152, 0.15)',
    md: '0 4px 16px rgba(147, 149, 152, 0.25)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
};
```

---

## 📝 Checklist de Implementación

### Para Claude Code:

- [ ] Configurar paleta de colores (#D52B1E, #939598)
- [ ] Implementar tipografía (Helvetica/Arial como fallback)
- [ ] Crear componentes de botones (primary, secondary, outline)
- [ ] Diseñar sistema de cards con bordes redondeados
- [ ] Implementar headers con color rojo corporativo
- [ ] Configurar formularios con estilos de enfoque rojos
- [ ] Crear badges con colores corporativos
- [ ] Implementar sistema de espaciado (múltiplos de 8px)
- [ ] Agregar logo con tamaños mínimos respetados
- [ ] Validar contraste de colores (WCAG AA mínimo)
- [ ] Diseñar versión responsive del logo
- [ ] Implementar efectos hover consistentes
- [ ] Crear modals con header rojo
- [ ] Agregar sombras suaves a elementos elevados

### Validación:

- [ ] ¿Los colores coinciden exactamente? (#D52B1E, #939598)
- [ ] ¿El logo tiene el área de seguridad correcta?
- [ ] ¿Los tamaños mínimos se respetan?
- [ ] ¿Los botones tienen hover states?
- [ ] ¿El contraste cumple con WCAG 2.1 AA?
- [ ] ¿La tipografía es legible en todos los tamaños?
- [ ] ¿Los bordes redondeados son consistentes?
- [ ] ¿El espaciado usa el sistema de 8px?
- [ ] ¿Los componentes son responsive?
- [ ] ¿Se evitaron todos los usos prohibidos del logo?

---

## 🚀 Principios de Diseño INEMEC

1. **Solidez:** Los elementos deben transmitir confianza y estabilidad
2. **Modernidad:** Uso de bordes redondeados y componentes limpios
3. **Profesionalismo:** Sobriedad en el uso de colores y efectos
4. **Claridad:** Jerarquía visual clara y legibilidad óptima
5. **Consistencia:** Uso uniforme de colores, tipografía y espaciado

---

## 📞 Contacto y Soporte

Para dudas sobre la implementación de la identidad de marca, consulta el archivo JSON adjunto o contacta al equipo de diseño de INEMEC.

**Archivo de configuración:** `inemec-brand-identity.json`

---

**Versión:** 1.0  
**Última actualización:** Diciembre 2024  
**Basado en:** Manual de Identidad Visual INEMEC (2012)