import React from "react";

export class Loading extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center border rounded p-3">
        <div className="spinner-border text-primary" role="status" style={{width: '4rem', height:'4rem'}}>
          <span className="visually-hidden">{this.props.texto}</span>
        </div>
      </div>
    );
  }
}

Loading.defaultProps = {
  texto: 'Aguarde....'
}

export default Loading;
