import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={
          <>
            <Home/>
            <About/>
            <Services/>
            <Contact/>
          </>
        }/>

        

      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App;