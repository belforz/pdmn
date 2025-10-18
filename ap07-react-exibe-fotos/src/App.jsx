import React, { Component } from "react";
import Busca from "./Busca";
import { client } from "./Client";
import PexesLogo from "./PexesLogo";
import Image from "./Image";

export default class App extends Component {
  state = {
    photos: [],
  };
  pexelsClient = null;

  onBuscaRealizado = (termo) => {
    this.pexelsClient.photos.search({ query: termo }).then((result) => {
      this.setState({ photos: result.photos });
    });
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
          {this.state.photos.map((photo) => (
            <div key={photo.id} className="">
              <div className="w-100">
                <Image
                  src={photo.src.small}
                  alt={photo.alt}
                  photographer={photo.photographer}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
