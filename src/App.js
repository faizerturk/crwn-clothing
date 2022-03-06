import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <>
    <h1>Hats Page</h1>
  </>
);

function App() {
  return (
    <div>
      <Switch> 
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
