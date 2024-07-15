import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import SleeperSofaCollection from "./Pages/ProductCollection/SleeperSofaCollection";
import LoveseatCollection from "./Pages/ProductCollection/LoveseatCollection";
import DaybedCollection from "./Pages/ProductCollection/DaybedCollection";
import ChairCollection from "./Pages/ProductCollection/ChairCollection";
import SectionalCollection from "./Pages/ProductCollection/SectionalCollection";
import OfficeSofaCollection from "./Pages/ProductCollection/OfficeSofaCollection";

import Chair1 from "./Pages/ProductDetail/Chair/Chair1";
import Chair2 from "./Pages/ProductDetail/Chair/Chair2";
import Chair3 from "./Pages/ProductDetail/Chair/Chair3";
import Chair4 from "./Pages/ProductDetail/Chair/Chair4";
import Chair5 from "./Pages/ProductDetail/Chair/Chair5";
import Chair6 from "./Pages/ProductDetail/Chair/Chair6";

import Loveseat1 from "./Pages/ProductDetail/Loveseat/Loveseat1";
import Loveseat2 from "./Pages/ProductDetail/Loveseat/Loveseat2";
import Loveseat3 from "./Pages/ProductDetail/Loveseat/Loveseat3";
import Loveseat4 from "./Pages/ProductDetail/Loveseat/Loveseat4";
import Loveseat5 from "./Pages/ProductDetail/Loveseat/Loveseat5";
import Loveseat6 from "./Pages/ProductDetail/Loveseat/Loveseat6";

import Daybed1 from "./Pages/ProductDetail/Daybed/Daybed1";
import Daybed2 from "./Pages/ProductDetail/Daybed/Daybed2";
import Daybed3 from "./Pages/ProductDetail/Daybed/Daybed3";
import Daybed4 from "./Pages/ProductDetail/Daybed/Daybed4";
import Daybed5 from "./Pages/ProductDetail/Daybed/Daybed5";
import Daybed6 from "./Pages/ProductDetail/Daybed/Daybed6";

import Sectional1 from "./Pages/ProductDetail/Sectional/Sectional1";
import Sectional2 from "./Pages/ProductDetail/Sectional/Sectional2";
import Sectional3 from "./Pages/ProductDetail/Sectional/Sectional3";
import Sectional4 from "./Pages/ProductDetail/Sectional/Sectional4";
import Sectional5 from "./Pages/ProductDetail/Sectional/Sectional5";
import Sectional6 from "./Pages/ProductDetail/Sectional/Sectional6";

import OfficeSofa1 from "./Pages/ProductDetail/OfficeSofa/OfficeSofa1";
import OfficeSofa2 from "./Pages/ProductDetail/OfficeSofa/OfficeSofa2";
import OfficeSofa3 from "./Pages/ProductDetail/OfficeSofa/OfficeSofa3";
import OfficeSofa4 from "./Pages/ProductDetail/OfficeSofa/OfficeSofa4";
import OfficeSofa5 from "./Pages/ProductDetail/OfficeSofa/OfficeSofa5";
import OfficeSofa6 from "./Pages/ProductDetail/OfficeSofa/OfficeSofa6";

import SleeperSofa1 from "./Pages/ProductDetail/SleeperSofa/SleeperSofa1";
import SleeperSofa2 from "./Pages/ProductDetail/SleeperSofa/SleeperSofa2";
import SleeperSofa3 from "./Pages/ProductDetail/SleeperSofa/SleeperSofa3";
import SleeperSofa4 from "./Pages/ProductDetail/SleeperSofa/SleeperSofa4";
import SleeperSofa5 from "./Pages/ProductDetail/SleeperSofa/SleeperSofa5";
import SleeperSofa6 from "./Pages/ProductDetail/SleeperSofa/SleeperSofa6";

import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import RelatedProductsBlock from "./Components/RelatedProductsBlock";
import Footer from "./Components/Footer";
import Cart from "./Pages/CartPage/Cart";

import LoginPopUp from "./Pages/Login/LoginPopUp";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && (
        <LoginPopUp showLogin={showLogin} setShowLogin={setShowLogin} />
      )}

      <ScrollToTop />
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<Cart setShowLogin={setShowLogin} />} />

        <Route path="chairCollection" element={<ChairCollection />} />
        <Route path="loveseatCollection" element={<LoveseatCollection />} />
        <Route path="daybedCollection" element={<DaybedCollection />} />
        <Route path="sectionalCollection" element={<SectionalCollection />} />
        <Route path="officeSofaCollection" element={<OfficeSofaCollection />} />
        <Route
          path="sleeperSofaCollection"
          element={<SleeperSofaCollection />}
        />

        <Route path="chairCollection/chair1" element={<Chair1 />} />
        <Route path="chairCollection/chair2" element={<Chair2 />} />
        <Route path="chairCollection/chair3" element={<Chair3 />} />
        <Route path="chairCollection/chair4" element={<Chair4 />} />
        <Route path="chairCollection/chair5" element={<Chair5 />} />
        <Route path="chairCollection/chair6" element={<Chair6 />} />

        <Route path="loveseatCollection/loveseat1" element={<Loveseat1 />} />
        <Route path="loveseatCollection/loveseat2" element={<Loveseat2 />} />
        <Route path="loveseatCollection/loveseat3" element={<Loveseat3 />} />
        <Route path="loveseatCollection/loveseat4" element={<Loveseat4 />} />
        <Route path="loveseatCollection/loveseat5" element={<Loveseat5 />} />
        <Route path="loveseatCollection/loveseat6" element={<Loveseat6 />} />

        <Route path="daybedCollection/daybed1" element={<Daybed1 />} />
        <Route path="daybedCollection/daybed2" element={<Daybed2 />} />
        <Route path="daybedCollection/daybed3" element={<Daybed3 />} />
        <Route path="daybedCollection/daybed4" element={<Daybed4 />} />
        <Route path="daybedCollection/daybed5" element={<Daybed5 />} />
        <Route path="daybedCollection/daybed6" element={<Daybed6 />} />

        <Route path="sectionalCollection/sectional1" element={<Sectional1 />} />
        <Route path="sectionalCollection/sectional2" element={<Sectional2 />} />
        <Route path="sectionalCollection/sectional3" element={<Sectional3 />} />
        <Route path="sectionalCollection/sectional4" element={<Sectional4 />} />
        <Route path="sectionalCollection/sectional5" element={<Sectional5 />} />
        <Route path="sectionalCollection/sectional6" element={<Sectional6 />} />

        <Route
          path="officeSofaCollection/OfficeSofa1"
          element={<OfficeSofa1 />}
        />
        <Route
          path="officeSofaCollection/OfficeSofa2"
          element={<OfficeSofa2 />}
        />
        <Route
          path="officeSofaCollection/OfficeSofa3"
          element={<OfficeSofa3 />}
        />
        <Route
          path="officeSofaCollection/OfficeSofa4"
          element={<OfficeSofa4 />}
        />
        <Route
          path="officeSofaCollection/OfficeSofa5"
          element={<OfficeSofa5 />}
        />
        <Route
          path="officeSofaCollection/OfficeSofa6"
          element={<OfficeSofa6 />}
        />

        <Route
          path="sleeperSofaCollection/sleeperSofa1"
          element={<SleeperSofa1 />}
        />
        <Route
          path="sleeperSofaCollection/sleeperSofa2"
          element={<SleeperSofa2 />}
        />
        <Route
          path="sleeperSofaCollection/sleeperSofa3"
          element={<SleeperSofa3 />}
        />
        <Route
          path="sleeperSofaCollection/sleeperSofa4"
          element={<SleeperSofa4 />}
        />
        <Route
          path="sleeperSofaCollection/sleeperSofa5"
          element={<SleeperSofa5 />}
        />
        <Route
          path="sleeperSofaCollection/sleeperSofa6"
          element={<SleeperSofa6 />}
        />
      </Routes>
      <RelatedProductsBlock />
      <Footer />
    </>
  );
}

export default App;

// <Routes>
// {/* Authentication Routes */}
// <Route
//   path="login"
//   element={
//     <AuthLayout>
//       <LoginPage />
//     </AuthLayout>
//   }
// />
// <Route
//   path="register"
//   element={
//     <AuthLayout>
//       <RegisterPage />
//     </AuthLayout>
//   }
// />

// {/* All other Routes  */}
// <Route
//   path="*"
//   element={
//     <MainLayout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="cart" element={<Cart />} />

//         <Route path="chairCollection" element={<ChairCollection />} />
//         <Route
//           path="loveseatCollection"
//           element={<LoveseatCollection />}
//         />
//         <Route path="daybedCollection" element={<DaybedCollection />} />
//         <Route
//           path="sectionalCollection"
//           element={<SectionalCollection />}
//         />
//         <Route
//           path="officeSofaCollection"
//           element={<OfficeSofaCollection />}
//         />
//         <Route
//           path="sleeperSofaCollection"
//           element={<SleeperSofaCollection />}
//         />

//         <Route path="chairCollection/chair1" element={<Chair1 />} />
//         <Route path="chairCollection/chair2" element={<Chair2 />} />
//         <Route path="chairCollection/chair3" element={<Chair3 />} />
//         <Route path="chairCollection/chair4" element={<Chair4 />} />
//         <Route path="chairCollection/chair5" element={<Chair5 />} />
//         <Route path="chairCollection/chair6" element={<Chair6 />} />

//         <Route
//           path="loveseatCollection/loveseat1"
//           element={<Loveseat1 />}
//         />
//         <Route
//           path="loveseatCollection/loveseat2"
//           element={<Loveseat2 />}
//         />
//         <Route
//           path="loveseatCollection/loveseat3"
//           element={<Loveseat3 />}
//         />
//         <Route
//           path="loveseatCollection/loveseat4"
//           element={<Loveseat4 />}
//         />
//         <Route
//           path="loveseatCollection/loveseat5"
//           element={<Loveseat5 />}
//         />
//         <Route
//           path="loveseatCollection/loveseat6"
//           element={<Loveseat6 />}
//         />

//         <Route path="daybedCollection/daybed1" element={<Daybed1 />} />
//         <Route path="daybedCollection/daybed2" element={<Daybed2 />} />
//         <Route path="daybedCollection/daybed3" element={<Daybed3 />} />
//         <Route path="daybedCollection/daybed4" element={<Daybed4 />} />
//         <Route path="daybedCollection/daybed5" element={<Daybed5 />} />
//         <Route path="daybedCollection/daybed6" element={<Daybed6 />} />

//         <Route
//           path="sectionalCollection/sectional1"
//           element={<Sectional1 />}
//         />
//         <Route
//           path="sectionalCollection/sectional2"
//           element={<Sectional2 />}
//         />
//         <Route
//           path="sectionalCollection/sectional3"
//           element={<Sectional3 />}
//         />
//         <Route
//           path="sectionalCollection/sectional4"
//           element={<Sectional4 />}
//         />
//         <Route
//           path="sectionalCollection/sectional5"
//           element={<Sectional5 />}
//         />
//         <Route
//           path="sectionalCollection/sectional6"
//           element={<Sectional6 />}
//         />

//         <Route
//           path="officeSofaCollection/OfficeSofa1"
//           element={<OfficeSofa1 />}
//         />
//         <Route
//           path="officeSofaCollection/OfficeSofa2"
//           element={<OfficeSofa2 />}
//         />
//         <Route
//           path="officeSofaCollection/OfficeSofa3"
//           element={<OfficeSofa3 />}
//         />
//         <Route
//           path="officeSofaCollection/OfficeSofa4"
//           element={<OfficeSofa4 />}
//         />
//         <Route
//           path="officeSofaCollection/OfficeSofa5"
//           element={<OfficeSofa5 />}
//         />
//         <Route
//           path="officeSofaCollection/OfficeSofa6"
//           element={<OfficeSofa6 />}
//         />

//         <Route
//           path="sleeperSofaCollection/sleeperSofa1"
//           element={<SleeperSofa1 />}
//         />
//         <Route
//           path="sleeperSofaCollection/sleeperSofa2"
//           element={<SleeperSofa2 />}
//         />
//         <Route
//           path="sleeperSofaCollection/sleeperSofa3"
//           element={<SleeperSofa3 />}
//         />
//         <Route
//           path="sleeperSofaCollection/sleeperSofa4"
//           element={<SleeperSofa4 />}
//         />
//         <Route
//           path="sleeperSofaCollection/sleeperSofa5"
//           element={<SleeperSofa5 />}
//         />
//         <Route
//           path="sleeperSofaCollection/sleeperSofa6"
//           element={<SleeperSofa6 />}
//         />
//       </Routes>
//     </MainLayout>
//   }
// />
// </Routes>
