import '../styles/App.css';
import ClassComponent from '../Components/ClassComponents';
import FunctionalComponent from '../Components/FunctionalComponent';

function App() {
  return (
    <>
    <div className="App">
     <h3>Convidado:</h3>
     <ClassComponent nome="Nicolas" estaNaLista={true} />
     <ClassComponent nome="Pedro" estaNaLista={false} />
     <ClassComponent nome="Carolina" estaNaLista={true} />
     <h3>Tarefas: </h3>
     <FunctionalComponent nome="Nicolas" tarefa="batata-frita" />
     <FunctionalComponent nome="Pedro" tarefa="pizza" />
     <FunctionalComponent nome="Carolina" tarefa="bebidas" />
   </div>
   </>
  );
}

export default App;
