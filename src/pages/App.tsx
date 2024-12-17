import Formulario from "../Components/formulario";
import Lista from "../Components/lista";
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
