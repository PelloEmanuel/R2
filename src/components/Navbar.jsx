import { Link, NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'

// Barra de navegación superior, presente en todas las páginas
function Navbar() {
  return (
    <div className="app-navbar mb-5">
      <Container className="d-flex justify-content-between align-items-center flex-wrap">
        <Link to="/" className="marca">
          Cuaderno de Tareas
        </Link>
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              'enlace-nav' + (isActive ? ' activo' : '')
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nueva-tarea"
            className={({ isActive }) =>
              'enlace-nav' + (isActive ? ' activo' : '')
            }
          >
            Nueva tarea
          </NavLink>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
