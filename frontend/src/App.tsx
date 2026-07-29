
import './App.css'
import Home from "./pages/Home";
import {Navbar} from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";

function App() {

  return (
    <>
    <Navbar/>
    <Home />
    <About/>
    <Services/>
    <Products/>

    </>
  )
}

export default App;
