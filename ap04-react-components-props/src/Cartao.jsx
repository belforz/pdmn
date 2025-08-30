import PropTypes from "prop-types";
const Cartao = (props) => {
  return (
    <div className="card">
      <div className="card-header text-muted">
        {props.cabecalho}
        
      </div>
      <div className="card-body ">
        {props.children}
      </div>
      </div>
  )
}

Cartao.propTypes = {
  cabecalho: PropTypes.node,
  children: PropTypes.node
};

export default Cartao