import styles from "../styles.module.css";
import { useState } from "react";

export const HomePage = ({ setIsWelcomePage }) => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salario", type: "Entrada", value: 400.0 },
    { description: "Mercado", type: "Despesa", value: 100.0 },
  ]);
  const [tarefa, setTarefa] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [listItensFiltered, setListItensFiltered] = useState(null);
  console.log({ listTransactions, listItensFiltered });
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

  const filterItens = (filtro) => {
    const listFiltered = listTransactions.filter(
      (item) => item.type.toLowerCase() === filtro
    );
    setListItensFiltered(listFiltered);
  };

  return (
    <>
      <div className={styles.main__HomePage}>
        <header className={styles.main__header}>
          <h1 className="title-1">
            <span>Nu</span> Kenzie
          </h1>
          <button className="buttonOne" onClick={() => setIsWelcomePage(true)}>
            Inicio
          </button>
        </header>
        <section className={styles.main__body}>
          <div className={styles.main__body__input}>
            <form onSubmit={handleSubmit} className={styles.body__input}>
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
              <p className="body">Ex: Compra de roupas</p>
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
                    <option value="Entrada" selected>
                      Entrada
                    </option>
                    <option value="Despesa">Despesa</option>
                  </select>
                </div>
              </div>
              <button className="buttonOne" type="submit">
                Inserir valor
              </button>
            </form>
            <div className={styles.body__input__valor}>
              <div className="priceTotal">
                <h1 className="title-3">Valor total:</h1>
                <p className="title-3">
                  {`$ 
                  ${listTransactions
                    .reduce(
                      (previous, current) =>
                        previous +
                        (current.type.toLowerCase() === "entrada"
                          ? current.value
                          : current.value * -1),
                      0
                    )
                    .toFixed(2)}
                  `}
                </p>
              </div>
              <p>O valor se refere ao saldo</p>
            </div>
          </div>
          <div className={styles.main__body__output}>
            <section>
              <h2 className="title-3 h2Title">Resumo Financeiro</h2>
              <div className="buttons">
                <button
                  className="buttonOne"
                  onClick={() => setListItensFiltered(null)}
                >
                  Todos
                </button>
                <button
                  className="buttonDisableOne"
                  onClick={() => filterItens("entrada")}
                >
                  Entradas
                </button>
                <button
                  className="buttonDisableOne"
                  onClick={() => filterItens("despesa")}
                >
                  Despesas
                </button>
              </div>
            </section>
            <ul>
              {listItensFiltered
                ? listItensFiltered.map((item, index) => {
                    const { description, type, value } = item;
                    return type.toLowerCase() === "entrada" ? (
                      <li
                        key={index}
                        className={`card ${styles.main__body__output__green}`}
                      >
                        <div>
                          <h3 className="title-3">{description}</h3>
                          <p className="body">{type}</p>
                        </div>
                        <p>{`R$ ${value}`}</p>
                        <button onClick={() => removeItem(description)}>
                          <img src="../../Pictures/lixeira.png" alt="Lixeira" />
                        </button>
                      </li>
                    ) : (
                      <li
                        key={index}
                        className={`card ${styles.main__body__output__red}`}
                      >
                        <div>
                          <h3 className="title-3">{description}</h3>
                          <p className="body">{type}</p>
                        </div>
                        <p>{`R$ ${value}`}</p>
                        <button onClick={() => removeItem(description)}>
                          <img src="../../Pictures/lixeira.png" alt="Lixeira" />
                        </button>
                      </li>
                    );
                  })
                : listTransactions.map((item, index) => {
                    const { description, type, value } = item;
                    return type.toLowerCase() === "entrada" ? (
                      <li
                        key={index}
                        className={`card ${styles.main__body__output__green}`}
                      >
                        <div>
                          <h3 className="title-3">{description}</h3>
                          <p className="body">{type}</p>
                        </div>
                        <p>{`R$ ${value}`}</p>
                        <button onClick={() => removeItem(description)}>
                          <img src="../../Pictures/lixeira.png" alt="Lixeira" />
                        </button>
                      </li>
                    ) : (
                      <li
                        key={index}
                        className={`card ${styles.main__body__output__red}`}
                      >
                        <div>
                          <h3 className="title-3">{description}</h3>
                          <p className="body">{type}</p>
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
