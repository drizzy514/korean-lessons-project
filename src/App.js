import './App.css';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
// pages


// components
import SiteHeader from './components/SiteHeader/SiteHeader';
import Register from './pages/Register/Register';


function App() {
  return <>
          <div className="container">
              <SiteHeader />
          </div>
            
      
          <Switch>
            <Route path="/" component={Home} exact  />
            <Route path="/signup" component={ Register } />
          </Switch>
         
  </> 
 
}

export default App;
