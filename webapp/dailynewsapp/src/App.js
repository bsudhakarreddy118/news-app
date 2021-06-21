import './App.css';
// import Dashboad from './Components/Dashboard/Dashboard';
import EditProfile from './Components/editProfile/editProfile';
// import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Landing from './Components/Landing/Landing';



// import Login from './Components/Login/Login';

// import LandingPage from './Components/LandingPage/LandingPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Header from './Components/header/Header';
import Registeration from './Components/Registeration/Registeration';
import Dashboad from './Components/Dashboard/Dashboard';




function App() {
  return (
    <div className="App">
      
     <Dashboad/>
      
      

      {/* <Router>

          <Switch>

            <Route exact path="/" component={Landing}/>

            <Route exact path="/register" component={Registeration}/>

            <Route exact path="/login" component={Login}/>

            <Route exact path="/" component={Registeration}/>

  <Route exact path="/newsApp" component={Landing}/>

  
  <Route exact path="/reglogin" component={Login}/>
  

          </Switch>
          </Router> */}






      {/* <Registration/> */}
      {/* <EditProfile/> */}

      
    </div>
  );
}

export default App;
