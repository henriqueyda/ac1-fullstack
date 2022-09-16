import {Switch, Route, Link} from 'react-router-dom';
import Form from './Form'
import Show from './Show';

function App() {
  return (
    <>
    <header>
      <Link to='/'>Voltar para página inicial</Link><br/>
      <Link to='/form'>Acesse aqui o formulário</Link><br/>
    </header>
    <main>
      <Switch>
        <Route path='/form' component= {Form}/>
        <Route path='/show' component= {Show}/>
      </Switch>
    </main></>
  );
}

export default App;
