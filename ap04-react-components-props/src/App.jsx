import Pedido from "./pedido";

const App = () => {
  return (
    <div className="container p-5 bg-primary">
      <div className="row">
        <div className="col-12 col-lg-6 col-0xxl-3">
          <Pedido 
          data="22/08/2025"
          icone ="fa-solid fa-hdd"
          titulo="SSD"
          descricao = "SDD Kingston 512GB" />
        </div>
        <div className="col-12 col-lg-6 col-0xxl-3">
          <Pedido 
          data="22/08/2025"
          icone ="fa-solid fa-headphones"
          titulo="Headphones"
          descricao = "Headphone Bluetooth" />
        </div>
        <div className="col-12 col-lg-6 col-0xxl-3">
          <Pedido 
          data="22/08/2025"
          icone ="fa-solid fa-mouse"
          titulo="Mouse"
          descricao = "Mouse Logitech" />
        </div>
        <div className="col-12 col-lg-6 col-0xxl-3">
          <Pedido 
          data="22/08/2025"
          icone ="fa-solid fa-gem"
          titulo="Diamante"
          descricao = "Diamante 1.5ct" />
        </div>
        <div className="col-12 col-lg-6 col-0xxl-3">
          <Pedido
          data="22/08/2025"
          icone ="fa-solid fa-hippo"
          titulo="Hipopótamo"
          descricao = "Hipopótamo do Professor" />
        </div>
        <div className="col-12 col-lg-6 col-0xxl-3">
          <Pedido 
          data="22/08/2025"
          icone ="fa-solid fa-hippo"
          titulo="Hipopótamo"
          descricao = "Filho do Hipopótamo" />
          {/* <div className="card">
            <div className="card-header text-muted">22/08/2025</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-headphones fa-solid fa-2x"></i>
              </div>
              <div className="border flex-grow-1 ms-3 pt-2">
                <h4 className="text-center">Headphones</h4>
                <p className="text-center"> Headphone Bluetooth</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header text-muted">22/08/2025</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-mouse fa-solid fa-2x"></i>
              </div>
              <div className="border flex-grow-1 ms-3 pt-2">
                <h4 className="text-center">Mouse</h4>
                <p className="text-center"> Mouse Logitech</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header text-muted">22/08/2025</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-gem fa-solid fa-2x"></i>
              </div>
              <div className="border flex-grow-1 ms-3 pt-2">
                <h4 className="text-center">Diamante</h4>
                <p className="text-center"> Diamante 1.5ct</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
