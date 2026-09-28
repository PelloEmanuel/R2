import { Link } from 'react-router-dom'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import TareaCard from '../components/TareaCard.jsx'

// Página principal: muestra todas las tareas recibidas por props
function Inicio({ tareas, eliminarTarea }) {
  const completas = tareas.filter((t) => t.completada).length

  return (
    <Container style={{ maxWidth: '760px' }}>
      <Row className="align-items-end mb-4">
        <Col>
          <h1 className="mb-1">Mis tareas</h1>
          <p style={{ color: 'var(--tinta-suave)' }} className="mb-0">
            {tareas.length === 0
              ? 'Sin tareas por ahora'
              : `${completas} de ${tareas.length} completadas`}
          </p>
        </Col>
        <Col xs="auto">
          <Link to="/nueva-tarea" className="btn btn-pino">
            + Nueva tarea
          </Link>
        </Col>
      </Row>

      {tareas.length === 0 ? (
        <Alert variant="light" className="tarjeta-papel">
          Todavía no hay tareas cargadas. Creá la primera con el botón de arriba.
        </Alert>
      ) : (
        <div className="lista-tareas">
          {tareas.map((tarea) => (
            <TareaCard
              key={tarea.id}
              tarea={tarea}
              eliminarTarea={eliminarTarea}
            />
          ))}
        </div>
      )}
    </Container>
  )
}

export default Inicio
