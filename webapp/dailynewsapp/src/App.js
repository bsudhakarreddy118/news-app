import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import EditProfile from './Components/EditProfile/EditProfile';


import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Header/>

      {/* <Login/> */}
{/* 
      <EditProfile/> */}

      <LandingPage/>

      <Footer/>
    </div>
  );
}

export default App;
