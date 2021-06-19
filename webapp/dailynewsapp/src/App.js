import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
// import EditProfile from './Components/EditProfile/EditProfile';
import Login from './Components/Login/Login';

// import LandingPage from './Components/LandingPage/LandingPage';
import Registration from './Components/Registeration/Registeration';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}

      <Login/>
{/* 
      <EditProfile/> */}

      {/* <LandingPage/> */}
{/* 
      <Registration/> */}

      <Footer/>
    </div>
  );
}

export default App;
