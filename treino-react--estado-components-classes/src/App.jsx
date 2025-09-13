import Cartao from "./cardMega";
import React from "react";
import NumerosCard from "./numerosCard";
import { numeros_one, numeros_three, numeros_two } from "./numeros";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: null,
    };
  }

  obterNumeros = () => {
    const escolha = [numeros_one, numeros_three, numeros_two];
    const escolha_btn = escolha[Math.floor(Math.random() * escolha.length)];
    this.setState({ numero: escolha_btn });
  };

  
  render() {
    console.log(this.state);
    const cabecalho = "MEGA SENA";
    return (
      <>
        <div className="container">
          <div className="col-12 col-lg-6 col-0xxl-3">
            <Cartao cabecalho={cabecalho}>
              <NumerosCard
                onGerar={this.obterNumeros}
                numeros={this.state.numero}
              />
            </Cartao>
          </div>
        </div>
      </>
    );
  }
}
export default App;
