import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<div>home</div>}></Route>
          <Route path="/test" element={<div>home test</div>}></Route>
          <Route path="/lol" element={<div>home lol</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
