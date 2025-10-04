import Numero from "./Numero";
import React from "react";
import { Button } from "react-bootstrap";

export class NumerosCard extends React.Component {
  render() {
    return (
      <div className="m-2">
        <Numero numeros={this.props.numeros} />

      <div className="w-100 mt-4">
        <div className="w-100 border border-success-subtle border border-3 rounded ">
          <Button
          type="button"
          onClick={this.props.onGerar}
          className="btn btn-success border border-success text-black bg-transparent w-100 py-1 fs-3">
          Gerar Jogo
          </Button>
          {/* <button
            type="button"
            onClick={this.props.onGerar}
            className="btn btn-success border border-success text-black bg-transparent w-100 py-1 fs-3"
          >
          </button> */}
        </div>
      </div>
    </div>
  );
}};

export default NumerosCard;
