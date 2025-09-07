const Numero = (props) => {
  if (!props.numeros) return null;

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex">
        {props.numeros.map((num, idx) => (
          <div
            key={idx}
            className="w-8rem card bg-success-subtle text-center border-success mx-1"
          >
            <div className="card-body ">
              <h5 className="card-title mb-0">{num}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numero;
