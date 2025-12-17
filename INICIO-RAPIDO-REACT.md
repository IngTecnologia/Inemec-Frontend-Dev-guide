# 🚀 Guía de Inicio Rápido - INEMEC React Components

## ⚡ Instalación en 3 Pasos

### 1️⃣ Copia los componentes a tu proyecto

```bash
# Desde la raíz de tu proyecto React
cp -r react-components/ src/components/inemec/
```

### 2️⃣ Importa y usa

```jsx
import { Button, Card, Input, Badge, Modal } from './components/inemec';

function App() {
  return (
    <div>
      <Card header={<h2>Bienvenido a INEMEC</h2>}>
        <p>Sistema de gestión de proyectos</p>
        <Button variant="primary">Comenzar</Button>
      </Card>
    </div>
  );
}
```

### 3️⃣ ¡Listo! 🎉

---

## 📦 ¿Qué incluye?

### ✅ 5 Componentes React Listos
- **Button** - 4 variantes (primary, secondary, outline, ghost)
- **Card** - Con header y footer opcionales
- **Input** - Con validación y mensajes
- **Badge** - 7 variantes de estado
- **Modal** - Con backdrop y control por teclado

### ✅ Archivos de Configuración
- `inemec-brand-identity.json` - Toda la info del manual en JSON
- `inemec-theme.js` - Tema para React/Tailwind/Styled Components
- `inemec-brand-styles.css` - CSS completo con variables
- `INEMEC-BRAND-IMPLEMENTATION-GUIDE.md` - Guía detallada

---

## 🎨 Colores Corporativos

```jsx
// Rojo INEMEC - Color Principal
#D52B1E

// Gris INEMEC - Color Secundario
#939598
```

---

## 💡 Ejemplos Rápidos

### Botones
```jsx
<Button variant="primary">Guardar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="outline">Ver más</Button>
```

### Formulario
```jsx
<Input 
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
<Button type="submit" variant="primary">Enviar</Button>
```

### Dashboard Card
```jsx
<Card>
  <h3 style={{ color: '#D52B1E' }}>Proyectos Activos</h3>
  <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>156</p>
  <Badge variant="success">+12%</Badge>
</Card>
```

### Modal
```jsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Abrir</Button>

<Modal 
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Confirmación"
>
  <p>¿Deseas continuar?</p>
</Modal>
```

---

## 📱 Compatible con:

- ✅ Create React App
- ✅ Next.js (App Router y Pages Router)
- ✅ Vite
- ✅ Remix
- ✅ React 16.8+ (Hooks)

---

## 🔧 Para Claude Code

Sube estos archivos a tu proyecto y dile a Claude Code:

```
"Adapta toda la UI del proyecto usando los componentes de 
/src/components/inemec/. Mantén los colores corporativos 
#D52B1E (rojo) y #939598 (gris) en todos los elementos."
```

---

## 📖 Documentación Completa

Ver `README.md` para:
- Todas las props de cada componente
- Ejemplos avanzados
- Guías de personalización
- Integración con frameworks
- Sistema de espaciado y tipografía

---

## ✨ Características Destacadas

- **Sin dependencias externas** (solo React y PropTypes)
- **Completamente responsive**
- **Accesible** (WCAG 2.1 AA)
- **Efectos hover** integrados
- **Estados de focus** visibles
- **CSS modular** (cada componente con su CSS)

---

## 🎯 Próximos Pasos

1. ✅ Copia los archivos a tu proyecto
2. ✅ Prueba el `Example.jsx` para ver todos los componentes
3. ✅ Lee el `README.md` para documentación completa
4. ✅ Personaliza según tus necesidades

---

## 💼 Archivos Principales

```
📁 react-components/
  ├── 📄 Button.jsx + Button.css
  ├── 📄 Card.jsx + Card.css
  ├── 📄 Input.jsx + Input.css
  ├── 📄 Badge.jsx + Badge.css
  ├── 📄 Modal.jsx + Modal.css
  ├── 📄 index.js (exporta todo)
  ├── 📄 Example.jsx (demo completa)
  ├── 📄 README.md (documentación)
  └── 📄 package.json

📁 configuración/
  ├── 📄 inemec-brand-identity.json
  ├── 📄 inemec-theme.js
  ├── 📄 inemec-brand-styles.css
  └── 📄 INEMEC-BRAND-IMPLEMENTATION-GUIDE.md
```

---

**¿Tienes dudas?** Revisa el `README.md` o el `Example.jsx` 🚀

**Desarrollado para:** INEMEC - Ingeniería ElectroMecánica  
**Basado en:** Manual de Identidad Visual INEMEC (2012)
