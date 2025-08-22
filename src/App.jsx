import "./App.css";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Adds from "./components/Adds";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import DetailsPage from "./components/DetailsPage";
import DetailPage2 from "./components/DetailPage2";
import { useState } from "react";
import Mens from "./components/Mens";
import MensDetails from "./components/MensDetails";
import Womens from "./components/Womens";
import WomenDetail from "./components/WomenDetail";
import Laptop from './components/Laptop';
import LaptopDetail from './components/LaptopDetail';
import Watch from './components/Watch';
import WatchDetail from './components/WatchDetail';
import Camera from './components/Camera';
import CameraDetail from './components/CameraDetail';
import Bag from './components/MensBags'
import MensBagsDetails from "./components/MensBagsDetails";
import WomensBags from './components/WomensBags'
import WomensBagsDetails from './components/WomensBagsDetails'
import MenFootwear from './components/MenFootwear'
import MensFootwearDetails from './components/MensFootwearDetails'
import WomensFootwear from './components/WomensFootwear'
import WomensFootwearDetails from './components/WomensFootwearDetails';
import Grocries from './components/Grocries'
import GrocriesDetails from './components/GrocriesDetails'
import Beauty from './components/Beauty'
import BeautyDetails from './components/BeautyDetails'
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  let slides = [
    "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg",
    "https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg",
    "https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg",
    "https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg",
    "https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg",
    "https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
  ];

  return (
    <>
      <BrowserRouter>
        {/* Header ko setSearchTerm bhej rahe hain taki search bar input change pe ye state update kare */}
        <Header setSearchTerm={setSearchTerm} />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero slides={slides} />
                <Featured />
                <Products searchTerm={searchTerm} /> 
                <Adds />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/detail/:id" element={<DetailPage2 />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/mens/:id" element={<MensDetails/>}/>
          <Route path="/womens" element={<Womens/>}/>
          <Route path="/womens/:id" element={<WomenDetail/>}/>
          <Route path="/laptop" element={<Laptop/>}/>
          <Route path="/laptop/:id" element={<LaptopDetail/>}/>
          <Route path="/watch" element={<Watch/>}/>
          <Route path="/watch/:id" element={<WatchDetail/>}/>
          <Route path="/camera" element={<Camera/>}/>
          <Route path="/camera/:id" element={<CameraDetail/>}/>
          <Route path="/mensBag" element={<Bag/>}/>
          <Route path="/mensBag/:id" element={<MensBagsDetails/>}/>
          <Route path="/womensBags" element={<WomensBags/>}/>
          <Route path="/womensBags/:id" element={<WomensBagsDetails/>}/>
          <Route path="/mensfootwear" element={<MenFootwear/>}/>
          <Route path="/mensfootwear/:id" element={<MensFootwearDetails/>}/> 
          <Route path="/womensfootwear" element={<WomensFootwear/>}/>
          <Route path="/womensfootwear/:id" element={<WomensFootwearDetails/>}/>
          <Route path="grocries" element={<Grocries/>}/>
          <Route path="/grocries/:id" element={<GrocriesDetails/>}/>
          <Route path="/beauty" element={<Beauty/>}/>
          <Route path="/beauty/:id" element={<BeautyDetails/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
