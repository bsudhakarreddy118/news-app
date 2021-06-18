import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
