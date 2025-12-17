import React, { useState } from 'react';
import { Button, Card, Input, Badge, Modal } from './components';

/**
 * Ejemplo de uso de los componentes INEMEC
 * Este archivo muestra cómo implementar todos los componentes
 */
function ExamplePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password });
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Encabezado */}
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ color: '#D52B1E', marginBottom: '8px' }}>
          Componentes INEMEC
        </h1>
        <p style={{ color: '#666666' }}>
          Biblioteca de componentes React con la identidad de marca INEMEC
        </p>
      </header>

      {/* Sección: Botones */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ color: '#D52B1E', marginBottom: '16px' }}>Botones</h2>
        <Card>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary">Botón Primary</Button>
            <Button variant="secondary">Botón Secondary</Button>
            <Button variant="outline">Botón Outline</Button>
            <Button variant="ghost">Botón Ghost</Button>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '16px',
            }}
          >
            <Button variant="primary" size="sm">
              Pequeño
            </Button>
            <Button variant="primary" size="md">
              Mediano
            </Button>
            <Button variant="primary" size="lg">
              Grande
            </Button>
            <Button variant="primary" disabled>
              Deshabilitado
            </Button>
          </div>
        </Card>
      </section>

      {/* Sección: Cards */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ color: '#D52B1E', marginBottom: '16px' }}>Cards</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          <Card
            header={<h3 style={{ margin: 0 }}>Card con Header</h3>}
            footer={
              <>
                <Button variant="ghost" size="sm">
                  Cancelar
                </Button>
                <Button variant="primary" size="sm">
                  Confirmar
                </Button>
              </>
            }
          >
            <p>
              Este es un ejemplo de card con header y footer. Los cards siguen
              la identidad visual de INEMEC con bordes redondeados y efectos
              hover.
            </p>
          </Card>

          <Card hoverable={false}>
            <h3 style={{ color: '#D52B1E', marginTop: 0 }}>Card Simple</h3>
            <p>
              Este card no tiene hover effect. Es útil para contenido estático
              que no requiere interacción.
            </p>
            <Badge variant="info">Sin hover</Badge>
          </Card>

          <Card>
            <h3 style={{ color: '#D52B1E', marginTop: 0 }}>
              Card con Badges
            </h3>
            <p style={{ marginBottom: '12px' }}>
              Los badges son útiles para mostrar estados o categorías:
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Badge variant="primary">Activo</Badge>
              <Badge variant="success">Completado</Badge>
              <Badge variant="warning">Pendiente</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Sección: Formularios */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ color: '#D52B1E', marginBottom: '16px' }}>Formularios</h2>
        <Card>
          <form onSubmit={handleSubmit}>
            <Input
              label="Correo Electrónico"
              type="email"
              placeholder="ejemplo@inemec.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helper="Ingresa tu correo corporativo"
              required
              fullWidth
            />

            <Input
              label="Contraseña"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helper="Mínimo 8 caracteres"
              required
              fullWidth
            />

            <Input
              label="Campo con Error"
              type="text"
              placeholder="Campo inválido"
              error="Este campo tiene un error de validación"
              fullWidth
            />

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <Button type="submit" variant="primary">
                Iniciar Sesión
              </Button>
              <Button type="button" variant="secondary">
                Cancelar
              </Button>
            </div>
          </form>
        </Card>
      </section>

      {/* Sección: Badges */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ color: '#D52B1E', marginBottom: '16px' }}>Badges</h2>
        <Card>
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ marginTop: 0, marginBottom: '8px' }}>Variantes:</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '8px' }}>Tamaños:</h4>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Badge variant="primary" size="sm">
                Pequeño
              </Badge>
              <Badge variant="primary" size="md">
                Mediano
              </Badge>
              <Badge variant="primary" size="lg">
                Grande
              </Badge>
            </div>
          </div>
        </Card>
      </section>

      {/* Sección: Modal */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ color: '#D52B1E', marginBottom: '16px' }}>Modal</h2>
        <Card>
          <p style={{ marginBottom: '16px' }}>
            Los modales son útiles para mostrar contenido en una capa superior
            y enfocar la atención del usuario.
          </p>
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Abrir Modal
          </Button>

          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Modal de Ejemplo"
            size="md"
            footer={
              <>
                <Button variant="ghost" onClick={() => setModalOpen(false)}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={() => setModalOpen(false)}>
                  Aceptar
                </Button>
              </>
            }
          >
            <p>
              Este es un modal corporativo de INEMEC. Puedes cerrar el modal
              de varias formas:
            </p>
            <ul>
              <li>Haciendo clic en el botón X</li>
              <li>Presionando la tecla ESC</li>
              <li>Haciendo clic fuera del modal</li>
              <li>Usando los botones del footer</li>
            </ul>
            <div style={{ marginTop: '16px' }}>
              <Badge variant="info">Modal adaptado a INEMEC</Badge>
            </div>
          </Modal>
        </Card>
      </section>

      {/* Sección: Ejemplo Completo */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ color: '#D52B1E', marginBottom: '16px' }}>
          Ejemplo de Dashboard
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          <Card>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '12px',
              }}
            >
              <h3 style={{ color: '#D52B1E', margin: 0, fontSize: '1rem' }}>
                Proyectos Activos
              </h3>
              <Badge variant="success">24</Badge>
            </div>
            <p style={{ fontSize: '2rem', fontWeight: '700', margin: '8px 0' }}>
              156
            </p>
            <p style={{ color: '#666666', fontSize: '0.875rem', margin: 0 }}>
              +12% vs mes anterior
            </p>
          </Card>

          <Card>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '12px',
              }}
            >
              <h3 style={{ color: '#D52B1E', margin: 0, fontSize: '1rem' }}>
                Personal Técnico
              </h3>
              <Badge variant="info">8</Badge>
            </div>
            <p style={{ fontSize: '2rem', fontWeight: '700', margin: '8px 0' }}>
              48
            </p>
            <p style={{ color: '#666666', fontSize: '0.875rem', margin: 0 }}>
              Técnicos certificados
            </p>
          </Card>

          <Card>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '12px',
              }}
            >
              <h3 style={{ color: '#D52B1E', margin: 0, fontSize: '1rem' }}>
                Mantenimientos
              </h3>
              <Badge variant="warning">3</Badge>
            </div>
            <p style={{ fontSize: '2rem', fontWeight: '700', margin: '8px 0' }}>
              92%
            </p>
            <p style={{ color: '#666666', fontSize: '0.875rem', margin: 0 }}>
              Cumplimiento programado
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default ExamplePage;
