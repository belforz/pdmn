import Pedido from "./pedido";
import Cartao from "./Cartao";
import Hippo from "./Hippo";
import Feedback from "./Feedback";

const App = () => {
  const textoOK = "Já chegou";
  const textoNOK = "Ainda nao chegou";
  const funcaoOK = () => alert("Obrigado pelo feedback");
  const funcaoNOK = () => alert("Verificaremos");
  const componenteFeedback = (
    <Feedback
      textoNOK={textoNOK}
      textoOK={textoOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  );
  const pedidos = [
    {
      data: "22/08/2025",
      icone: "fa-solid fa-hdd",
      descricao: "SSD 52GB",
    },
    {
      data: "21/08/2025",
      icone: "fa-solid fa-book",
      titulo: "Concret Maths",
      descricao: "Autor DOnald Knuth",
    },
    {
      data: "21/08/2025",
      icone: "fa-solid fa-hippo",
      titulo: "Hippotamo",
      descricao: "Filhote de hipotótamo",
    },
    {
      data: "21/08/2025",
      titulo: "Diamante",
      icone: "fa-solid fa-gem",
      descricao: "Diamante transparente",
    },
  ];
  return (
      <div className="row">
        {pedidos.map((item, id) => (
          <div className="col-12 col-lg-6 col-0xxl-3" key={id}>
            <div className="mt-3">
            <Cartao cabecalho={item.data}>
              <Pedido
                icone={item.icone}
                titulo={item.titulo}
                descricao={item.descricao}
              />
              {componenteFeedback}
            </Cartao>
            </div>
          </div>
        ))}
        <Hippo />
      </div>
    
  );
};

export default App;
