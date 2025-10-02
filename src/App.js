import "./style.scss";

function App() {
  return (
    <div className="background">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={[`starLayer${i}`]} />
      ))}
      <h1 className="title">Starlit Sky</h1>
    </div>
  );
}

export default App;
