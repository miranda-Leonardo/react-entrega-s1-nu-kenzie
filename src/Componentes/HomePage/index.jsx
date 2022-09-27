import "./style.css";
import { useState } from "react";

export const HomePage = ({ setIsWelcomePage }) => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salario", type: "Entrada", value: 400.0 },
  ]);
  const [tarefa, setTarefa] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  console.log(listTransactions);
  const handleSubmit = (event) => {
    event.preventDefault();

    setListTransactions([
      ...listTransactions,
      { description: tarefa, type: tipo, value: Number(valor) },
    ]);
    setTarefa("");
    setValor("");
    setTipo("");
  };

  const removeItem = (itemRemove) => {
    const newList = listTransactions.filter(
      (item) => item.description !== itemRemove
    );
    setListTransactions(newList);
  };

  return (
    <>
      <div className="container">
        <header>
          <h1 className="title-1">
            <span>Nu</span> Kenzie
          </h1>
          <button className="buttonOne" onClick={() => setIsWelcomePage(true)}>
            Inicio
          </button>
        </header>
        <section>
          <div>
            <form onSubmit={handleSubmit}>
              <label className="headline labelTarefa" htmlFor="tarefa">
                Descrição
              </label>
              <input
                type="text"
                className="headline"
                id="tarefa"
                placeholder="Digite sua descrição"
                value={tarefa}
                onChange={(event) => setTarefa(event.target.value)}
              />
              <p>Ex: Compra de roupas</p>
              <div className="divValor">
                <div>
                  <label htmlFor="preco" className="labelPreco">
                    Preço
                  </label>
                  <input
                    type="text"
                    className="headline"
                    id="preco"
                    placeholder="1"
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="tipoDeValor" className="headline labelSelect">
                    Tipo de Valor
                  </label>
                  <select
                    className="inputOne headline"
                    id="tipoDeValor"
                    value={tipo}
                    onChange={(event) => setTipo(event.target.value)}
                  >
                    <option value="entrada">Entrada</option>
                    <option value="despesa">Despesa</option>
                  </select>
                </div>
              </div>
              <button className="buttonOne" type="submit">
                Inserir valor
              </button>
            </form>
            <div>
              <div className="priceTotal">
                <h1 className="title-3">Valor total:</h1>
                <p>
                  {`$ 
                  ${listTransactions.reduce(
                    (previous, current) => previous + current.value,
                    0
                  )}
                  `}
                </p>
              </div>
              <p>O valor se refere ao saldo</p>
            </div>
          </div>
          <div>
            <section>
              <h2 className="title-3 h2Title">Resumo Financeiro</h2>
              <div className="buttons">
                <button className="buttonOne">Todos</button>
                <button className="buttonDisableOne">Entradas</button>
                <button className="buttonDisableOne">Despesas</button>
              </div>
            </section>
            <ul>
              {listTransactions.map((item, index) => {
                const { description, type, value } = item;
                return (
                  <li key={index} className="card">
                    <div>
                      <h3>{description}</h3>
                      <p>{type}</p>
                    </div>
                    <p>{`R$ ${value}`}</p>
                    <button onClick={() => removeItem(description)}>
                      <img src="../../Pictures/lixeira.png" alt="Lixeira" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};
