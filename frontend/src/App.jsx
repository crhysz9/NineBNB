import Header from "./components/Header";
<<<<<<< HEAD
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
=======
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register";
>>>>>>> 53a350ac19d0c92d415cee744925d9fb2da3578c

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register  />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
