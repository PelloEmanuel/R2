import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

// Representa una tarea dentro de la lista de inicio.
// Recibe la tarea y la función para eliminarla por props.
function TareaCard({ tarea, eliminarTarea }) {
  const manejarEliminar = (evento) => {
    // Evita que el click dispare la navegación del Link contenedor
    evento.preventDefault()
    evento.stopPropagation()

    const confirmar = window.confirm(
      `¿Eliminar la tarea "${tarea.titulo}"? Esta acción no se puede deshacer.`,
    )
    if (confirmar) {
      eliminarTarea(tarea.id)
    }
  }

  return (
    <Link to={`/tareas/${tarea.id}`} className="fila-tarea aparecer">
      <span className={`punto-estado ${tarea.completada ? 'completa' : ''}`} />

      <div className="contenido">
        <h3 className="titulo-tarea">{tarea.titulo}</h3>
        <p className="descripcion-corta">
          {tarea.descripcion.length > 90
            ? `${tarea.descripcion.slice(0, 90)}...`
            : tarea.descripcion}
        </p>
      </div>

      <div className="d-flex align-items-center gap-2 flex-shrink-0">
        <span
          className={`etiqueta-estado ${tarea.completada ? 'completa' : 'incompleta'}`}
        >
          {tarea.completada ? 'Completa' : 'Incompleta'}
        </span>
        <Button
          size="sm"
          className="btn-peligro"
          onClick={manejarEliminar}
          aria-label={`Eliminar tarea ${tarea.titulo}`}
        >
          Eliminar
        </Button>
      </div>
    </Link>
  )
}

export default TareaCard
