import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
