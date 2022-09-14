//manejar la base de datos funciona como interface
//permite controlar nos da informacion sobre el modelo de datos de lo que estamos construyendo
// el id podria no venir/se crea una tarea hasta que no se guarde no lo tiene
//el id es opcional en este caso - ?
export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
