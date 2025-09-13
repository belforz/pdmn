import { Component } from "react";

export class EstacaoClimatica extends Component {
  timer = null
  state = {
    data:null,

  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({data: new Date().toLocaleString()})

    }, 1000)

  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div
              className="d-flex align-items-center border border rounded mb-2 "
              style={{ height: "6rem" }}
            >
              <i className={`fa-solid fa-4x fa-${this.props.icone}`}></i>
              <p className="w-75 text-center fs-2 ms-3">{this.props.estacao}</p>
            </div>
          </div>
          <p className="text-center">
            {this.props.latitude
              ? `Coordenadas: ${this.props.latitude}, ${this.props.longitude} | Data: ${this.state.data}`
              : "Clique no botão para saber sua estação"}
          </p>
        </div>
        <button
          className="btn btn-outline-primary w-100 mt-2"
          onClick={this.props.obterLocalizacao}
        >
          Qual é a minha estação?
        </button>
      </>
    );
  }
}

export default EstacaoClimatica;
