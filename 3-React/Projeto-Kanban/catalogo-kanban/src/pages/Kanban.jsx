import React, { useState } from "react";

export default function Kanban() {
  const [input, setInput] = useState();
  const [backlog, setBacklog] = useState([]);

  const [onProgress, setOnProgress] = useState([]);
  const [finish, setFinish] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    const newBacklog = [...backlog, input];
    setBacklog(newBacklog);
    setInput("");
  };

  //console.log("INPUT: ", input);
  console.log("BACKLOG: ", backlog);

  const handleDelete = (e, index, category, setCategory) => {
    e.preventDefault();
    let newArr = [...category];
    newArr.splice(index, 1);
    setCategory(newArr);
  };

  const handleNext = (e, index) => {
    e.preventDefault();
    const val = backlog[index];
    const newOnProgress = [...onProgress, val];
    console.log("VAL: ", val);
    console.log("ONPROGRESS: ", onProgress);

    setOnProgress(newOnProgress);
    handleDelete(e, index, backlog, setBacklog);
  };

  const handlePrev = (e, index) => {
    e.preventDefault();
    const val = onProgress[index];
    const newBacklogProgress = [...backlog, val];
    setBacklog(newBacklogProgress);

    let newOnProgress = [...onProgress];
    newOnProgress.splice(index, 1);
    setOnProgress(newOnProgress);

    handleDelete(e, index, onProgress, setOnProgress);
  };

  const handleNext2 = (e, index, actual, setActual, next, setNext) => {
    e.preventDefault();
    const val = actual[index];
    const newArr = [...next, val];
    console.log("VAL: ", val);
    console.log("ONPROGRESS: ", onProgress);

    setNext(newArr);
    handleDelete(e, index, actual, setActual);
  };

  return (
    <div>
      <header>
        <h1>Quadro Kanbam</h1>
        <form action="" onSubmit={(e) => handleInput(e)}>
          <input
            type="text"
            value={input}
            placeholder="Descreva a tarefa e pressione Enter"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <input type="text" id="filtro" placeholder="Filtrar por titulo" />
      </header>

      <main>
        <section>
          <div>
            <h2>Backlog</h2>
            <span>{backlog.length}</span>

            {backlog.map((item, i) => (
              <div key={i}>
                <span>Design</span>
                <p>{item}</p>
                <button>Prev</button>
                <button onClick={(e) => handleNext(e, i)}>next</button>
                {/* <button onClick={(e) => handleDelete(e, i)}>Excluir</button> */}
                <button
                  onClick={(e) => handleDelete(e, i, backlog, setBacklog)}
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div>
            <h2>Em Progresso</h2>
            <span>{onProgress.length}</span>
          </div>
          <div>
            {onProgress.map((item, i) => (
              <div key={i}>
                <span>BackEnd</span>
                <p>{item}</p>
                <button onClick={(e) => handlePrev(e, i)}>Prev</button>
                <button
                  onClick={(e) =>
                    handleNext2(
                      e,
                      i,
                      onProgress,
                      setOnProgress,
                      finish,
                      setFinish
                    )
                  }
                >
                  next
                </button>
                <button
                  onClick={(e) => handleDelete(e, i, onProgress, setOnProgress)}
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div>
            <h2>Concluído</h2>
            <span>{finish.length}</span>
          </div>
          <div>
            <span>Planejamento</span>
            <p>definir escopo do Spring</p>
            <button>Prev</button>
            <button>next</button>
            <button onClick={(e) => handleDelete(e, i, finish, setFinish)}>
              Excluir
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

// MUST DO:
// set a personalized type of the State for deleting
//   const handleDelete = (e, index) => {
//     e.preventDefault();
//     let newBacklogDelete = [...backlog];
//     newBacklogDelete.splice(index, 1);
//     setBacklog(newBacklogDelete);
//     //console.log("NEW ARR: ", newBacklogDelete);
//   };
