import { useState } from "react";
import { Produto } from "./components/Greeting";

const content = [
  {
    label: "Por que React?",
    items: [
      "Grêmio tri da libertadores",
      "Grêmio tri da libertadores",
      "Grêmio tri da libertadores",
    ],
  },

  {
    label: "Por que não React?",
    items: [
      "Grêmio tetra da libertadores",
      "Grêmio tetra da libertadores",
      "Grêmio tetra da libertadores",
    ],
  },

  {
    label: "Por que o Grêmio?",
    items: [
      "Grêmio penta da libertadores",
      "Grêmio penta da libertadores",
      "Grêmio penta da libertadores",
    ],
  },
];

function App() {
  const [indexAbaAtiva, atualizaIndexAbaAtiva] = useState(0);

  const dados = {
    name: "Nome",
    preco: 10,
    descricao: "Alguma descriçãoooo",
  };

  return (
    <>
      <Produto
        name={dados.name}
        preco={dados.preco}
        descricao={dados.descricao}
      />
      <div>
        <header>
          <h1>ReactJs</h1>
          <p>Estou estudando React</p>
        </header>

        <div>
          <menu>
            {content.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => atualizaIndexAbaAtiva(index)}
              >
                {tab.label}
              </button>
            ))}
          </menu>

          <div>
            <ul>
              {content[indexAbaAtiva].items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
