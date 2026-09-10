import { useState } from "react";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  function agregarTarea() {
    if (tarea !== "") {
      setTareas([...tareas, { texto: tarea, hecha: false }]);
      setTarea("");
    }
  }

  function tacharTarea(index) {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].hecha = !nuevasTareas[index].hecha;
    setTareas(nuevasTareas);
  }

  return (
    <div style={{
      width: "400px",
      margin: "50px auto",
      padding: "20px",
      fontFamily: "Arial",
      textAlign: "center",
      border: "1px solid #ccc",
      borderRadius: "10px"
    }}>
      <h1>Mis tareas</h1>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />

      <button onClick={agregarTarea}>Agregar</button>

      <ul style={{ textAlign: "left" }}>
        {tareas.map((item, index) => (
          <li key={index} style={{ margin: "10px" }}>
            <input
              type="checkbox"
              checked={item.hecha}
              onChange={() => tacharTarea(index)}
            />

            <span
              style={{
                textDecoration: item.hecha ? "line-through" : "none",
                marginLeft: "10px"
              }}
            >
              {item.texto}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;