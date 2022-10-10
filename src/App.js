import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Homepage from "./components/pages/homepage/Homepage";
import EditTrip from "./components/pages/edittrip/EditTrip";
import ChooseDestination from "./components/pages/choosedestination/ChooseDestination";
import Destination from "./components/pages/destination/Destination";
import CarouselPage from "./components/pages/destination/CarouselPage";
import AddRecommendation from "./components/pages/addrecommendation/AddRecommendation";
import EditTripReccs from "./components/pages/edittrip/EditTripReccs";
import TourPackage from "./components/pages/tourpackage/TourPackage";
import EditProfile from "./components/pages/editprofile/EditProfile";
import MyDocuments from "./components/pages/mydocuments/MyDocuments";
import SignIn from "./components/pages/signin/SignIn";
import SignUp from "./components/pages/signup/SignUp";
import Preference from "./components/pages/preference/Preference";
import Preference2 from "./components/pages/preference2/Preference2";
import MapComponent from "./components/pages/gMap/map";
import NavigationBar from "./components/pages/header/header";
import Sidebar from "./components/pages/sidebar/Sidebar";

function App() {
  const [menuOpen, setMenuOpen] = useState(0);

  const BASE_NAME_URL = "pocket-tour-app";
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar meneuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route
            path={BASE_NAME_URL + "/homepage"}
            element={<Homepage />}
          ></Route>
          <Route
            path={BASE_NAME_URL + "/edittrip"}
            element={<EditTrip />}
          ></Route>
          <Route
            path={BASE_NAME_URL + "/choosedestination"}
            element={
              <div>
                <ChooseDestination />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/destination"}
            element={
              <div>
                <Destination />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/carousel"}
            element={
              <div>
                <CarouselPage />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/edittrip"}
            element={
              <div>
                <EditTrip />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/addrecommendation"}
            element={
              <div>
                <AddRecommendation />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/edittripreccs"}
            element={
              <div>
                <EditTripReccs />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/tourpackage"}
            element={
              <div>
                <TourPackage />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/editprofile"}
            element={
              <div>
                <EditProfile />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/mydocuments"}
            element={
              <div>
                <MyDocuments />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/"}
            element={
              <div>
                <SignIn />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/signup"}
            element={
              <div>
                <SignUp />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/preference"}
            element={
              <div>
                <Preference />
              </div>
            }
          ></Route>
          <Route
            path={BASE_NAME_URL + "/preference2"}
            element={
              <div>
                <Preference2 />
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
