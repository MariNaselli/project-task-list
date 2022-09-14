//emula base de datos
import {Task} from "./task"
export const TASKS: Task[] = [
  {
    id: 1,
    text: "Terminar 3 modulo angular",
    day: 'Septiembre 14 a las 12:00',
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
