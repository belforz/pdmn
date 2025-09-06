import React from "react";
import Gato from "./Gato";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      msgErro: null,
    };
  }
  icones = {
    Primavera: "flower",
    Outono: "leaf",
    Verao: "sun",
    Inverno: "snowflake",
  };

  obterEstacao = (dataAtual, latitude) => {
    const anoAtual = dataAtual.getFullYear();
    const dataBreakPointInverno = new Date(anoAtual, 5, 21);
    const dataBreakPointPrimavera = new Date(anoAtual, 8, 24);
    const dataBreakPointVerao = new Date(anoAtual, 11, 22);
    const dataBreakPointOutuno = new Date(anoAtual, 2, 21);
    const estaNoSul = latitude < 0;
    return dataAtual >= dataBreakPointInverno &&
      dataAtual < dataBreakPointPrimavera
      ? estaNoSul
        ? "Inverno"
        : "Verao"
      : dataAtual >= dataBreakPointPrimavera && dataAtual < dataBreakPointVerao
      ? estaNoSul
        ? "Primavera"
        : "Outono"
      : dataAtual >= dataBreakPointVerao && dataAtual < dataBreakPointOutuno
      ? estaNoSul
        ? "Verão"
        : "Inverno"
      : estaNoSul
      ? "Outono"
      : "Primavera";
  };

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date();
        const estacao = this.obterEstacao(dataAtual, position.coords.latitude);
        const icone = this.icones[estacao];
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: dataAtual.toLocaleString(),
          icone: icone,
        });
      },
      (err) => {
        console.log(`Erro: ${err}`);
        this.setState({ msgErro: "Tente novamente" });
      }
    );
  };

  render() {
    return (
      <>
        <div className="container mt-2">
          <div className="row">
            <div className="col-12">
              <Gato tamanho={"8x"} />
              <Gato tamanho={"8x"} direcao={"flip-horizontal"} />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div
                className="d-flex align-items-center border border rounded mb-2 "
                style={{ height: "6rem" }}
              >
                <i className={`fa-solid fa-4x fa-${this.state.icone}`}></i>
                <p className="w-75 text-center fs-2 ms-3">
                  {this.state.estacao}
                </p>
              </div>
            </div>
            <p className="text-center">
              {this.state.latitude
                ? `Coordenadas: ${this.state.latitude}, ${this.state.longitude} | Data: ${this.state.data}`
                : this.state.msgErro
                ? this.state.msgErro
                : "Clique no botão para saber sua estação"}
            </p>
          </div>
          <button
            className="btn btn-outline-primary w-100 mt-2"
            onClick={this.obterLocalizacao}
          >
            Qual é a minha estação?
          </button>
        </div>
      </>
    );
  }

  // window.navigator.geolocation.getCurrentPosition(
  //   (position) => {
  //     console.log(`Deu certo: ${position}`)
  //   },
  //   (err) => {
  //     console.log(`Erro: ${err}`)
  //   },
  // )
}

export default App;
