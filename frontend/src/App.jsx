import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import Auth from './pages/auth';
import CreateRecipe from './pages/create-recipe';
import SaveRecipe from './pages/save-recipe';
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/saved-recipe" element={<SaveRecipe />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
