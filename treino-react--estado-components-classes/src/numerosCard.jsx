import Numero from "./Numero";

const NumerosCard = (props) => {
  return (
    <div className="m-2">
      <Numero numeros={props.numeros} />

      <div className="w-100 mt-4">
        <div className="w-100 border border-success-subtle border border-3 rounded ">
          <button
            type="button"
            onClick={props.onGerar}
            className="btn btn-success border border-success text-black bg-transparent w-100 py-1 fs-3"
          >
            Gerar Jogo
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumerosCard;
