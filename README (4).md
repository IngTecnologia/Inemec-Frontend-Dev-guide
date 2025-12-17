# INEMEC React Components Library

Biblioteca de componentes React siguiendo la **identidad de marca de INEMEC** (Ingeniería ElectroMecánica).

## 🎨 Características

- ✅ **100% alineados** con el Manual de Identidad Visual INEMEC
- ✅ **Colores corporativos**: Rojo #D52B1E y Gris #939598
- ✅ **Componentes listos para usar** sin configuración adicional
- ✅ **Responsive** y adaptados a dispositivos móviles
- ✅ **Accesibles** (WCAG 2.1 AA)
- ✅ **TypeScript ready** (PropTypes incluidos)
- ✅ **CSS Modules compatible**

## 📦 Componentes Disponibles

- **Button** - Botones con 4 variantes (primary, secondary, outline, ghost)
- **Card** - Tarjetas con header y footer opcionales
- **Input** - Inputs con labels, validación y mensajes de ayuda
- **Badge** - Tags/badges con múltiples variantes
- **Modal** - Modales con backdrop y múltiples tamaños

## 🚀 Instalación

### 1. Copia los archivos a tu proyecto

```bash
# Copiar la carpeta de componentes a tu proyecto
cp -r react-components/ src/components/inemec/
```

### 2. Importa los componentes

```jsx
// Importar componentes individuales
import { Button, Card, Input, Badge, Modal } from './components/inemec';

// O importar todos
import InemecComponents from './components/inemec';
const { Button, Card, Input } = InemecComponents;
```

## 📖 Uso Básico

### Button

```jsx
import { Button } from './components/inemec';

function App() {
  return (
    <div>
      {/* Botón Primary */}
      <Button variant="primary" onClick={() => alert('Click!')}>
        Guardar
      </Button>

      {/* Botón Secondary */}
      <Button variant="secondary">
        Cancelar
      </Button>

      {/* Botón Outline */}
      <Button variant="outline" size="lg">
        Ver Más
      </Button>

      {/* Botón deshabilitado */}
      <Button variant="primary" disabled>
        Procesando...
      </Button>

      {/* Botón full width */}
      <Button variant="primary" fullWidth>
        Botón Completo
      </Button>
    </div>
  );
}
```

**Props disponibles:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `disabled`: boolean (default: false)
- `fullWidth`: boolean (default: false)
- `type`: 'button' | 'submit' | 'reset' (default: 'button')
- `onClick`: function
- `className`: string

---

### Card

```jsx
import { Card, Button, Badge } from './components/inemec';

function App() {
  return (
    <Card
      header={<h3>Título del Card</h3>}
      footer={
        <>
          <Button variant="ghost">Cancelar</Button>
          <Button variant="primary">Guardar</Button>
        </>
      }
    >
      <p>Contenido del card con la identidad INEMEC.</p>
      <Badge variant="success">Activo</Badge>
    </Card>
  );
}
```

**Props disponibles:**
- `header`: ReactNode (opcional)
- `footer`: ReactNode (opcional)
- `hoverable`: boolean (default: true)
- `className`: string

---

### Input

```jsx
import { Input } from './components/inemec';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <form>
      <Input
        label="Correo Electrónico"
        type="email"
        placeholder="usuario@inemec.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        helper="Ingresa tu correo corporativo"
        error={errors.email}
        required
        fullWidth
      />

      <Input
        label="Contraseña"
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        required
        fullWidth
      />
    </form>
  );
}
```

**Props disponibles:**
- `label`: string
- `type`: string (default: 'text')
- `placeholder`: string
- `value`: string
- `onChange`: function
- `error`: string (mensaje de error)
- `helper`: string (texto de ayuda)
- `disabled`: boolean (default: false)
- `required`: boolean (default: false)
- `fullWidth`: boolean (default: false)
- `className`: string

---

### Badge

```jsx
import { Badge } from './components/inemec';

function App() {
  return (
    <div>
      <Badge variant="primary">Nuevo</Badge>
      <Badge variant="success">Completado</Badge>
      <Badge variant="warning">Pendiente</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
      
      {/* Diferentes tamaños */}
      <Badge variant="primary" size="sm">Pequeño</Badge>
      <Badge variant="primary" size="md">Mediano</Badge>
      <Badge variant="primary" size="lg">Grande</Badge>
    </div>
  );
}
```

**Props disponibles:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'success' | 'info' | 'warning' | 'error' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `className`: string

---

### Modal

```jsx
import { Modal, Button } from './components/inemec';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Abrir Modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmar Acción"
        size="md"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Confirmar
            </Button>
          </>
        }
      >
        <p>¿Estás seguro de que deseas continuar con esta acción?</p>
      </Modal>
    </>
  );
}
```

**Props disponibles:**
- `isOpen`: boolean (required)
- `onClose`: function (required)
- `title`: string (required)
- `children`: ReactNode (required)
- `footer`: ReactNode (opcional)
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `closeOnBackdropClick`: boolean (default: true)
- `showCloseButton`: boolean (default: true)

---

## 🎨 Paleta de Colores

```css
/* Colores Corporativos INEMEC */
--inemec-red: #D52B1E;        /* Color principal - Energía y dinamismo */
--inemec-gray: #939598;       /* Color secundario - Sobriedad y elegancia */

/* Variaciones */
--inemec-red-hover: #B22318;
--inemec-red-active: #8A1C13;
--inemec-gray-hover: #75767A;
--inemec-gray-active: #5C5D5F;
```

## 📐 Sistema de Espaciado

Basado en múltiplos de **8px**:

```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;
```

## 🔤 Tipografía

```css
font-family: 'Helvetica Neue', 'Arial', sans-serif;

/* Tamaños */
--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;    /* 16px */
--font-size-lg: 1.125rem;  /* 18px */
--font-size-xl: 1.25rem;   /* 20px */
```

## 📱 Responsive

Todos los componentes son **responsive** y se adaptan automáticamente a diferentes tamaños de pantalla:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accesibilidad

Los componentes siguen las pautas **WCAG 2.1 AA**:

- ✅ Contraste de colores adecuado
- ✅ Soporte para navegación con teclado
- ✅ Estados de focus visibles
- ✅ Labels apropiados para screen readers
- ✅ Roles ARIA cuando es necesario

## 🧪 Ejemplo Completo

Ver el archivo `Example.jsx` para un ejemplo completo de implementación con todos los componentes.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import ExamplePage from './components/inemec/Example';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExamplePage />);
```

## 🛠️ Personalización

### Modificar Colores

Si necesitas ajustar colores, edita las variables CSS en cada archivo `.css`:

```css
/* Button.css */
.inemec-btn--primary {
  background-color: #D52B1E; /* Cambia este valor */
}
```

### Añadir Variantes

Puedes extender los componentes con nuevas variantes:

```css
/* Button.css */
.inemec-btn--tertiary {
  background-color: #0066CC;
  color: #FFFFFF;
}
```

```jsx
// Button.jsx
<Button variant="tertiary">Nueva Variante</Button>
```

## 📂 Estructura de Archivos

```
react-components/
├── Button.jsx
├── Button.css
├── Card.jsx
├── Card.css
├── Input.jsx
├── Input.css
├── Badge.jsx
├── Badge.css
├── Modal.jsx
├── Modal.css
├── index.js         # Exporta todos los componentes
├── Example.jsx      # Página de ejemplo completa
└── README.md        # Este archivo
```

## 🔗 Integración con Frameworks

### Next.js

```jsx
// app/page.js
import { Button } from '@/components/inemec';

export default function Home() {
  return <Button variant="primary">Click me</Button>;
}
```

### Create React App

```jsx
// src/App.js
import { Button, Card } from './components/inemec';

function App() {
  return (
    <Card>
      <Button variant="primary">Guardar</Button>
    </Card>
  );
}
```

### Vite

```jsx
// src/App.jsx
import { Button } from './components/inemec';

function App() {
  return <Button variant="primary">Click</Button>;
}
```

## 📝 Notas Importantes

1. **CSS Imports**: Asegúrate de importar los archivos CSS en tu aplicación:
   ```jsx
   import './components/inemec/Button.css';
   ```

2. **PropTypes**: Los componentes incluyen PropTypes para validación en desarrollo.

3. **No Dependencies**: Los componentes no requieren librerías externas, solo React.

4. **CSS Modules**: Si usas CSS Modules, renombra los archivos `.css` a `.module.css`.

## 🎯 Casos de Uso

### Dashboard de Proyectos

```jsx
<div className="dashboard">
  <Card header={<h3>Proyectos Activos</h3>}>
    <p>156 proyectos</p>
    <Badge variant="success">+12%</Badge>
  </Card>
</div>
```

### Formulario de Login

```jsx
<Card header={<h2>Iniciar Sesión</h2>}>
  <Input label="Usuario" type="email" fullWidth />
  <Input label="Contraseña" type="password" fullWidth />
  <Button variant="primary" fullWidth>Entrar</Button>
</Card>
```

### Lista de Tareas

```jsx
<Card>
  <div className="task">
    <span>Mantenimiento Tubería #45</span>
    <Badge variant="warning">Pendiente</Badge>
    <Button variant="outline" size="sm">Ver</Button>
  </div>
</Card>
```

## 🤝 Contribución

Para añadir nuevos componentes o mejorar los existentes:

1. Sigue las guías del **Manual de Identidad Visual INEMEC**
2. Mantén la consistencia con los componentes existentes
3. Incluye PropTypes y comentarios JSDoc
4. Asegura accesibilidad (WCAG 2.1 AA)

## 📄 Licencia

Componentes desarrollados siguiendo el Manual de Identidad Visual de **INEMEC LTDA** (2012).

---

**Desarrollado para:** INEMEC - Ingeniería ElectroMecánica  
**Versión:** 1.0.0  
**Última actualización:** Diciembre 2024
