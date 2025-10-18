import React, { Component } from "react";
import { IconField } from "primereact/IconField";
import { InputIcon } from "primereact/InputIcon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default class Busca extends Component {
  state = {
    termo: "",
  };

  onTermoAlterado = (evento) => {
    this.setState({ termo: evento.target.value });
  };

  onFormSubmit = (evento) =>{
    evento.preventDefault()
    this.props.onBuscaRealizado(this.state.termo)
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
      <div className="flex flex-column">
        <IconField iconPosition="left" className="w-full">
          <InputIcon className="pi pi-search">
          </InputIcon>
            <InputText
              value={this.state.termo}
              className="w-full"
              placeholder={this.props.dica}
              onChange={this.onTermoAlterado}
            ></InputText>
        </IconField>
        <Button 
          className="mt-2"
          label="OK">
        </Button>
      </div>
     
      </form>
    );
  }
}

Busca.defaultProps = {
  dica: "Buscar ...",
};
