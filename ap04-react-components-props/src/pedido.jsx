import PropTypes from 'prop-types';

const Pedido = (props) => {
  return (
   
      <div className="d-flex">
        <div className="d-flex align-items-center">
          <i className={`${props.icone} fa-2x`}></i>
        </div>
        <div className="border flex-grow-1 ms-3 pt-2">
          <h4 className="text-center">{props.titulo}</h4>
          <p className="text-center">{props.descricao}</p>
        </div>
      </div>
    
  );
};

Pedido.propTypes = {
  data: PropTypes.string.isRequired,
  icone: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default Pedido;