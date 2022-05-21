import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <main>
      <h1>Tarefas</h1>
      <form>
        <input
          aria-label="Informe uma tarefa para adicionar"
          name="input"
          type="text"
          placeholder="O que você precisa fazer?"
          value=""
        />
      </form>
      <hr />
      <div>
        <label htmlFor="filter">Filtrar</label>
        <select id="filter">
          <option value="all">Todas</option>
          <option value="completed">Concluídas</option>
          <option value="uncompleted">Pendentes</option>
        </select>
      </div>
      <ul>
        <li>Tarefa A</li>
        <li>Tarefa B</li>
        <li>Tarefa C</li>
      </ul>
      <button>Remover concluídas</button>
    </main>
  );
}

const rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);
