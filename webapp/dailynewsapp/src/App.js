import './App.css';

import EditProfile from './Components/editProfile/editProfile';

import Footer from './Components/footer/Footer';
import Landing from './Components/Landing/Landing';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Header from './Components/header/Header';
import Registeration from './Components/Registeration/Registeration';
import Dashboad from './Components/Dashboard/Dashboard';
import Dashboard from './Components/Dashboard/Dashboard';
//import Fav from './Components/favourite/favourite/Fav/Fav';




function App() {
  return (
    <div className="App">
      
     {/* <Fav/> */}
     
      {/* <Login/> */}

       <Router>

          <Switch>

            <Route exact path="/" component={Landing}/>

            <Route exact path="/register" component={Registeration}/>

            <Route exact path="/login" component={Login}/>

            <Route exact path="/" component={Registeration}/>

          <Route exact path="/newsApp" component={Landing}/>

  
  <Route exact path="/reglogin" component={Login}/>
  <Route exact path="/" component={Login}/>
  {/* <Link to="/dashboard" className="nav-link" onClick={handleSubmit} >login</Link>
                                               */}
          <Route exact path="/dashboard" component={Dashboard}/>

  

          </Switch>
          </Router> 

 

{/* <Dashboad/> */}


      {/* <Registration/> */}
      {/* <EditProfile/> */}

      
    </div>
  );
}

export default App;
