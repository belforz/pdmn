const NumerosCard = (props) => {
  return (
    <div className="d-flex justify-content-center m-2">
      <div className="d-flex flex-column align-items-stretch">
        {props.Numero}
      </div>
      <div className="w-100 mt-2">
        <div className="w-100">
          <button
            type="button"
            onClick={() => console.log("Gerar Jogo")}
            className="btn btn-success text-black bg-transparent w-100 py-1 fs-3"
          >
            Gerar Jogo
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumerosCard;
