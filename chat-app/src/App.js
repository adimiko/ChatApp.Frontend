import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JoinToLobbyPage from './components/pages/JoinToLobbyPage';
import ChatPage from './components/pages/ChatPage';
import { HubConnectionBuilder } from '@microsoft/signalr';

function App() {


  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={JoinToLobbyPage} />
          <Route exact path="/chat" component={ChatPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
