import { useParams, useNavigate, Link } from 'react-router-dom'
import { Container, Alert } from 'react-bootstrap'
import TareaForm from '../components/TareaForm.jsx'

// Página de edición: precarga el formulario con los datos actuales
// de la tarea y guarda los cambios mediante actualizarTarea
function EditarTarea({ tareas, actualizarTarea }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const tarea = tareas.find((t) => t.id === Number(id))

  if (!tarea) {
    return (
      <Container style={{ maxWidth: '700px' }}>
        <Alert variant="danger">
          No se encontró ninguna tarea con el ID <strong>{id}</strong>.
        </Alert>
        <Link to="/" className="btn btn-contorno">
          Volver a inicio
        </Link>
      </Container>
    )
  }

  const manejarGuardar = (datosFormulario) => {
    actualizarTarea(tarea.id, datosFormulario)
    navigate(`/tareas/${tarea.id}`)
  }

  return (
    <Container style={{ maxWidth: '600px' }}>
      <div className="tarjeta-papel aparecer">
        <h1 className="mb-4">Editar tarea</h1>
        <TareaForm
          valoresIniciales={{
            titulo: tarea.titulo,
            descripcion: tarea.descripcion,
            completada: tarea.completada,
          }}
          onGuardar={manejarGuardar}
          textoBoton="Guardar cambios"
        />
      </div>
    </Container>
  )
}

export default EditarTarea
