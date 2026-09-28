// Lista inicial de tareas. Sirve como punto de partida
// antes de que el estado de React tome el control de los datos.
const tareasIniciales = [
  {
    id: 1,
    titulo: 'Terminar el informe de la materia',
    descripcion:
      'Redactar y revisar el informe final de la materia de Desarrollo Web, incluyendo capturas de pantalla y conclusiones.',
    fechaCreacion: '2026-09-01',
    completada: false,
  },
  {
    id: 2,
    titulo: 'Estudiar para el parcial de React',
    descripcion:
      'Repasar hooks (useState, useEffect, useParams, useNavigate) y practicar ejercicios de React Router.',
    fechaCreacion: '2026-09-05',
    completada: false,
  },
  {
    id: 3,
    titulo: 'Comprar materiales para el proyecto',
    descripcion:
      'Conseguir los materiales necesarios para armar la maqueta del proyecto integrador.',
    fechaCreacion: '2026-09-08',
    completada: true,
  },
  {
    id: 4,
    titulo: 'Organizar el escritorio de trabajo',
    descripcion:
      'Ordenar la carpeta de archivos del proyecto y limpiar el escritorio físico antes de empezar la semana.',
    fechaCreacion: '2026-09-10',
    completada: true,
  },
]

export default tareasIniciales
