import style from "./style.module.scss";

function App() {
  return (
    <div className={style.background}>
      {[1, 2, 3, 4, 5].map((i) => (
        <>
          <div key={i} className={style[`starLayer${i}`]} />
          <div key={i} className={style[`starLayer${i}Duplicate`]} />
        </>
      ))}
      <h1 className={style.title}>Starlit Sky</h1>
    </div>
  );
}

export default App;
