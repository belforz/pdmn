import React, { Component } from "react";
import Busca from "./Busca";
import { client } from "./Client";
import PexesLogo from "./PexesLogo";
import ListaImagens from "./components/ListaImage";
import pexelsClient from "./utils/pexelsClient";
import Image from "./Image";

export default class App extends Component {
  state = {
    photos: [],
  };
  

  onBuscaRealizado = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo
      }
      .then(result => {
        this.setState({photos: result.data.photos})
      })
    })
  };

  componentDidMount() {
    this.pexelsClient = client;
  }
  render() {
    return (
      <div className="grid w-9 m-auto border-400">
        <div className="col-12">
          <PexesLogo />
        </div>
        <h1>Exibir uma lista de</h1>

        <div className="col-12">
          <Busca
            dica="Procurar ...."
            onBuscaRealizado={this.onBuscaRealizado}
          />
        </div>
        <div className="col-12">
          <div className="grid">
              <ListaImagens photos={this.state.photos}/> 
            </div>
        </div>
      </div>
    );
  }
}
