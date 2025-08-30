import PropTypes from "prop-types";

const Feedback = (props) => {
  return (
    <div className="d-flex justify-content-evenly m-2">
      <div className="btn btn-primary" type="button" onClick={props.funcaoOK}>
        {props.textoOK}
      </div>
      <div className="btn btn-danger" type="button"onClick={props.funcaoNOK} >
        {props.textoNOK}
        </div>
    </div>
  );
};

Feedback.propTypes = {
  funcaoNOK: PropTypes.func.isRequired,
  textoNOK: PropTypes.string.isRequired,
  funcaoOK: PropTypes.func.isRequired,
  textoOK: PropTypes.string.isRequired
};

export default Feedback;
