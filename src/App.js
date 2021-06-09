import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage';
import MemberPage from './pages/MemberPage';
import { Route } from 'react-router';

function App() {
  return (
    <div>
      <Route path="/board" component={BoardPage}></Route>
      <Route path="/member" component={MemberPage}></Route>
      <Route path="/" exact={true} component={MainPage}></Route>
    </div>
  );
}

export default App;
