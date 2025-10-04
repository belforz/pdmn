import React from "react";
import { Card } from "react-bootstrap";

export class CartaoMega extends React.Component {
  render() {
    return (
      <>
        <Card>
          <Card.Header className="bg-grey text-muted fs-3">
            {this.props.cabecalho}
          </Card.Header>
          <Card.Body>{this.props.children}</Card.Body>
        </Card>
      </>
    );
  }
}

export default CartaoMega;
