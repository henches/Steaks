
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Questions from './pages/QuestionsPage';
import GlobalContext from './GlobalContext';
import ContextType from './model/ContextType';
import CategoryType from './model/Category';
import {questionList} from './cdsData'

function App() {
  function getInitialContextValue():ContextType {
    return {
      currentCategory: CategoryType.Transport,
      questionList: questionList
    }
  }

  return (
    <GlobalContext.Provider value={getInitialContextValue()}>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/questions' component={Questions}/>
          <Route path='/about' component={Questions}/>
        </Switch>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
