import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { AppContextProvider } from './components/AppContext';
import Main from './pages/Main';
import Content from './pages/Content';
import NotFound from './pages/NotFound';

function App() {
  return (
      <AppContextProvider>
        <HashRouter>
          <Switch>

            <Route exact path="/" component={Main} />
            <Route path="/content" component={Content} />
            <Route component={NotFound} />

          </Switch>
        </HashRouter>
      </AppContextProvider>
  );
}

export default App;