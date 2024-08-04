import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">Titulo: {task.title}</h1>
      <hr />
      <h2 className="text-gray-200 text-sm">Descripcion: {task.description}</h2>
      <button
        className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
      <br />
    </div>
  );
}
