import Cartao from "./cardMega";
import React from "react";
import NumerosCard from "./numerosCard";
import { Container, Row, Col } from "react-bootstrap";
// import { numeros_one, numeros_three, numeros_two } from "./numeros";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: null,
    };
  }

  obterNumeros = () => {
    const numeros_aleatorios = []
    while(numeros_aleatorios.length < 6){
      const num = Math.floor(Math.random() * 100) + 1;
      if(!numeros_aleatorios.includes(num)){
        numeros_aleatorios.push(num);
      }
    }
    this.setState({numero: numeros_aleatorios})
  };

  render() {
    console.log(this.state);
    const cabecalho = "MEGA SENA";
    return (
      <>
        <Container>
          <Row>
            <Col sm={12} lg={6} xxl={3}>
              <Cartao cabecalho={cabecalho}>
                <NumerosCard
                  onGerar={this.obterNumeros}
                  numeros={this.state.numero}
                />
              </Cartao>
            </Col>
          </Row>
        </Container>
        {/* <div className="container">
          <div className="col-12 col-lg-6 col-0xxl-3">
          </div>
        </div> */}
      </>
    );
  }
}
export default App;
