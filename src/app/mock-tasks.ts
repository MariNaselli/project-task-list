//emula base de datos
import { TaskInterface } from "./task"
export const TASKS_MOCKS: TaskInterface[] = [
  {
    id: 1,
    text: "Darle besos a mi amorcito",
    day: 'Todos los días a toda hora',
    reminder: true
  },
  {
    id: 2,
    text: "Merendar",
    day: 'Septiembre 14 a las 17:00',
    reminder: true
  },
  {
    id: 3,
    text: "Leer sobre angular",
    day: 'Septiembre 14 a las 19:00',
    reminder: false
  },
  {
    id: 4,
    text: "Leer mi libro",
    day: 'Septiembre 14 a las 21:00',
    reminder: false
  },
]
