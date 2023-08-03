import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import Payment from './Components/Payment';
import Footer from './Components/Footer';
import { BrowserRouter as Router  } from 'react-router-dom';
import Products from './Components/Products';
import Routess from './Components/Routess';
import About from './Components/About';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
      <Navbar><Router>
        <Routess/>
        </Router></Navbar>
    <Home/>
      <br></br>
      <br></br>
      <Home1/>
      <Home2/>
      <Payment/>
      <Footer/>
      <Products/>
      <About/>
      <Contact/>
      
      

    </div>
  );
}

export default App;
