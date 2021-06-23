import './App.css';

import EditProfile from './Components/EditProfile/EditProfile';

import Footer from './Components/footer/Footer';
import Landing from './Components/Landing/Landing';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';

import Registeration from './Components/Registeration/Registeration';
import Dashboad from './Components/Dashboard/Dashboard';
import Dashboard from './Components/Dashboard/Dashboard';
import Fav from './Components/Favourite/Fav/Fav';
import FavNews from './Components/Favourite/FavNews/FavNews';
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
  

  
  <Route exact path="/dashboard" component={Dashboard}/>
                                              
  
  <Route exact path="/" component={Dashboard}/>
  <Route exact path="/edit" component={EditProfile}/>


  {/* <li><Link to="/favourite" className="dropdown-item">Favorite</Link></li> */}
  <Route exact path="/" component={Dashboard}/>

  <Route exact path="/favourite" component={Fav}/>

  <Route exact path="/" component={Fav}/>
  <Route exact path="/favourite" component={Dashboard}/>
  {/* <Link to="/dashboard" className="nav-link"><h2>NewsApp</h2></Link> */}

  {/* <Link to="/dashboard" className="btn btn-success" onClick={EditContact} >SaveChanges</Link> */}
   <Route exact path="/" component={EditProfile}/>   
   {/* <Link to="/edit" className="btn btn-success" onClick={EditContact} >SaveChanges</Link> */}
   <Route exact path="/profile" component={Login}/>  
  
          </Switch>
          </Router> 


          {/* <Fav/> */}

 

{/* <Dashboad/> */}


      {/* <Registration/> */}
      {/* <EditProfile/> */}

      
    </div>
  );
}

export default App;
