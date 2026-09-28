import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import DetalleTarea from './pages/DetalleTarea.jsx'
import NuevaTarea from './pages/NuevaTarea.jsx'
import EditarTarea from './pages/EditarTarea.jsx'
import NotFound from './pages/NotFound.jsx'

import tareasIniciales from './data/tareas.js'

// App concentra el estado de las tareas y lo distribuye
// a las páginas mediante props. Es el "nivel adecuado"
// porque todas las páginas cuelgan de acá en las rutas.
function App() {
  const [tareas, setTareas] = useState(tareasIniciales)

  // Agrega una nueva tarea generando un ID único.
  // Devuelve el ID creado para poder redirigir a su detalle.
  const agregarTarea = (nuevaTarea) => {
    const nuevoId =
      tareas.length > 0 ? Math.max(...tareas.map((t) => t.id)) + 1 : 1

    const tareaCompleta = { id: nuevoId, ...nuevaTarea }

    setTareas((tareasAnteriores) => [...tareasAnteriores, tareaCompleta])

    return nuevoId
  }

  // Actualiza los campos de una tarea existente, conservando su ID
  const actualizarTarea = (id, datosActualizados) => {
    setTareas((tareasAnteriores) =>
      tareasAnteriores.map((tarea) =>
        tarea.id === id ? { ...tarea, ...datosActualizados } : tarea,
      ),
    )
  }

  // Elimina una tarea del estado según su ID
  const eliminarTarea = (id) => {
    setTareas((tareasAnteriores) =>
      tareasAnteriores.filter((tarea) => tarea.id !== id),
    )
  }

  return (
    <>
      <Navbar />
      <main className="pb-5">
        <Routes>
          <Route
            path="/"
            element={<Inicio tareas={tareas} eliminarTarea={eliminarTarea} />}
          />
          <Route
            path="/tareas/:id"
            element={
              <DetalleTarea tareas={tareas} eliminarTarea={eliminarTarea} />
            }
          />
          <Route
            path="/tareas/:id/editar"
            element={
              <EditarTarea tareas={tareas} actualizarTarea={actualizarTarea} />
            }
          />
          <Route
            path="/nueva-tarea"
            element={<NuevaTarea agregarTarea={agregarTarea} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
