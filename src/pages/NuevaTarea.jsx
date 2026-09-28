import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import TareaForm from '../components/TareaForm.jsx'

// Página de creación: arma la tarea y delega el formulario a TareaForm
function NuevaTarea({ agregarTarea }) {
  const navigate = useNavigate()

  const manejarGuardar = (datosFormulario) => {
    const nuevaTarea = {
      ...datosFormulario,
      // La fecha se genera automáticamente al crear la tarea
      fechaCreacion: new Date().toISOString().split('T')[0],
    }

    const idCreado = agregarTarea(nuevaTarea)

    // Redirige al detalle de la tarea recién creada
    navigate(`/tareas/${idCreado}`)
  }

  return (
    <Container style={{ maxWidth: '600px' }}>
      <div className="tarjeta-papel aparecer">
        <h1 className="mb-4">Nueva tarea</h1>
        <TareaForm
          valoresIniciales={{ titulo: '', descripcion: '', completada: false }}
          onGuardar={manejarGuardar}
          textoBoton="Crear tarea"
        />
      </div>
    </Container>
  )
}

export default NuevaTarea
