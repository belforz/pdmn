import React from "react";
import Gato from "./Gato";
import EstacaoClimatica from "./EstacaoClimatica";
import Loading from "./Loading";
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   latitude: null,
    //   longitude: null,
    //   estacao: null,
    //   data: null,
    //   icone: null,
    //   msgErro: null,
    // };
    console.log("constructor");
  }

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    msgErro: null,
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.obterLocalizacao()
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmout");
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
    console.log("render");
    return (
      <>
        <div className="container mt-2">
          <div className="row">
            <div className="col-12">
              <Gato tamanho={"8x"} />
              <Gato tamanho={"8x"} direcao={"flip-horizontal"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {(!this.state.latitude && !this.state.msgErro) ? (
                <Loading texto="Aguardando autorização"/>
              ) : this.state.msgErro ? (
                <p className="border rounder p-2 fs-1 text-center">
                  é preciso dar permissão de acesso á localização. Atualize a
                  pagina
                </p>
              ) : (
                <EstacaoClimatica
                  latitude={this.state.latitude}
                  longitude={this.state.longitude}
                  estacao={this.state.estacao}
                  icone={this.state.icone}
                  obterLocalizacao={this.obterLocalizacao}
                />
              )}
            </div>
          </div>
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
