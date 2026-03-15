// Importando os hooks do React-Redux e as ações do reducer
import { useSelector, useDispatch } from "react-redux";

// Importando as ações do reducer para incrementar e decrementar o contador
import { incrementar, decrementar } from "./store/counterReducer";
import "./App.css";


// Componente principal do aplicativo
function App() { 
  const contador = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
{/* useSelector é um hook do React-Redux que permite acessar o estado do Redux dentro do componente. Neste caso, estamos acessando o valor do contador a partir do estado global. */}
  return (
  <div>
    <h1>Contador: {contador}</h1>
    <button onClick={() => dispatch(incrementar())}>Incrementar</button>
    <button onClick={() => dispatch(decrementar())}>Decrementar</button>
  </div>
  )
}


  export default App;

