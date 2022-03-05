import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/header";
import Homepage from "./components/homepage/Homepage";
import EditTrip from "./components/edittrip/EditTrip";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/edittrip" element={<EditTrip/>}></Route>
          <Route path="/lol" element={<div>home lol</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
