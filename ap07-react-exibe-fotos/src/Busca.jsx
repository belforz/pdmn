import React, { Component } from "react";
import { IconField } from "primereact/IconField";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputext";
import { Button } from "primereact/button";

export default class Busca extends Component {
  state = {
    termo: "",
  };
  onTermoAlterado = (evento) => {
    this.setState({ termo: evento.target.value });
  };
  render() {
    return (
      <div className="flex flex-column">
        <IconField iconPosition="left" className="w-full">
          <InputIcon className="pi pi-search">
            <InputText
              value={this.state.termo}
              className="w-full"
              placeholder={this.props.dica}
              onChange={this.onTermoAlterado}
            ></InputText>
          </InputIcon>
        </IconField>
        <Button 
        className="mt-2"
        label="OK">
    
        </Button>
      </div>
    );
  }
}

Busca.defaultProps = {
  dica: "Buscar ...",
};
