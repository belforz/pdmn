import React, { Component } from "react";
import Busca from "./Busca";

export default class App extends Component {

  onFormSubmit = (evento) =>{
    evento.preventDefault()
    
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
      <div className="grid w-9 m-auto border-400">
        <div className="col-12">
          <h1>Exibir uma lista de</h1>
        </div>
        <div className="col-12">
          <Busca dica="Procurar ...." />
        </div>
      </div>
      </form>
    );
  }
}


