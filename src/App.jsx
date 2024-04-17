import { useState, useEffect } from "react";
import styles from './main.module.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    if (imc <= 18.5) {
      setResultado('Magro');
    } else if (imc >= 18.6 && imc <= 24.9) {
      setResultado('Normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setResultado('Sobrepeso');
    } else if (imc >= 30 && imc <= 39.9) {
      setResultado('Obesidade');
    } else if (imc >= 40) {
      setResultado('Obesidade Grave');
    }
  }

  useEffect(() => {
    if (peso && altura) {
      calcularIMC();
    }
  }, [peso, altura]);

  const Submit = (e) => {
    e.preventDefault();
    calcularIMC();
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.h1}>Calculadora IMC REACT</h1>
      <form className={styles.form} onSubmit={Submit}>
        <input className={styles.inputField} type="number" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)} />
        <input className={styles.inputField} type="number" placeholder="Altura (m)" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </form>
      {resultado && (
        <table className={styles.resultTable}>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{(peso / (altura * altura)).toFixed(2)}</td>
              <td>{resultado}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
