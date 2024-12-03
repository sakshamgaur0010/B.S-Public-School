import "./App.css";
import Contact_Us_form from "./Components/Contact_Us_form";
import Main from "./Components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrincipalMessage from "./Components/PrincipalMessage";
import Activities from "./Components/Activities";
import About from "./Components/About";
import Coordinator from "./Components/Coordinator";
import { FeaturedImageGallery } from "./Components/FeaturedImageGallery";


function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/About_School" element={<About/>}/>
            <Route path="/Activities" element={<Activities/>}/>
            <Route path="/contact" element={<Contact_Us_form />} />
            <Route path="/principal-message" element={<PrincipalMessage />} />
            <Route path="/Co-Ordinator" element={<Coordinator/>} />
            <Route path="/FeaturedImageGallery" element={<FeaturedImageGallery/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
