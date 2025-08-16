import "./style.css"

const App = () => {
  return (
    <div
      style={{
        margin: "auto",
        width: 768,
        backgroundColor: "#EEE",
        padding: 12,
        borderRadius: 8,
      }}
    >
      <label htmlFor="nome" className="rotulo">
        Nome:
      </label>
      <input type="text" id="nome" style={{ paddingTop: 4, paddingBottom: 4, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}} />
      <button style={{ marginTop: 12, paddingTop: 8, paddingBottom: 8 , borderRadius: 8, border: 'none', backgroundColor: 'blueviolet', color: '#FFF', cursor: 'pointer', width: '100%' }}>Enviar</button>
    </div>
  );
};

export default App;
