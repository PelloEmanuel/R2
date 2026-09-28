import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

// Formulario controlado. Recibe valores iniciales, la función a ejecutar
// al enviar y el texto del botón, para servir tanto a Crear como a Editar.
function TareaForm({ valoresIniciales, onGuardar, textoBoton }) {
  const [titulo, setTitulo] = useState(valoresIniciales.titulo)
  const [descripcion, setDescripcion] = useState(valoresIniciales.descripcion)
  const [completada, setCompletada] = useState(valoresIniciales.completada)
  const [error, setError] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    // Validación: título y descripción son obligatorios
    if (titulo.trim() === '' || descripcion.trim() === '') {
      setError('El título y la descripción son obligatorios.')
      return
    }

    onGuardar({
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      completada,
    })
  }

  return (
    <Form onSubmit={manejarEnvio}>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group className="mb-3" controlId="campoTitulo">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Lavar el auto"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="campoDescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Detalles de la tarea..."
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="campoEstado">
        <Form.Check
          type="checkbox"
          label="Marcar como completada"
          checked={completada}
          onChange={(e) => setCompletada(e.target.checked)}
        />
      </Form.Group>

      <Button type="submit" className="btn-pino">
        {textoBoton}
      </Button>
    </Form>
  )
}

export default TareaForm
