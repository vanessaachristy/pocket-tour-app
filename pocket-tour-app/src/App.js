import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/pages/header/header";
import Homepage from "./components/pages/homepage/Homepage";
import EditTrip from "./components/pages/edittrip/EditTrip";

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
