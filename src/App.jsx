import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";

import HomePage from "./Pages/HomePage/HomePage";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import RelatedProductsBlock from "./Components/RelatedProductsBlock";
import Footer from "./Components/Footer";
import LoginPopUp from "./Pages/Login/LoginPopUp";

// Lazy load components
const Cart = lazy(() => import("./Pages/CartPage/Cart"));

const ChairCollection = lazy(() =>
  import("./Pages/ProductCollection/ChairCollection")
);
const LoveseatCollection = lazy(() =>
  import("./Pages/ProductCollection/LoveseatCollection")
);
const DaybedCollection = lazy(() =>
  import("./Pages/ProductCollection/DaybedCollection")
);
const SectionalCollection = lazy(() =>
  import("./Pages/ProductCollection/SectionalCollection")
);
const OfficeSofaCollection = lazy(() =>
  import("./Pages/ProductCollection/OfficeSofaCollection")
);
const SleeperSofaCollection = lazy(() =>
  import("./Pages/ProductCollection/SleeperSofaCollection")
);

const Chair1 = lazy(() => import("./Pages/ProductDetail/Chair/Chair1"));
const Chair2 = lazy(() => import("./Pages/ProductDetail/Chair/Chair2"));
const Chair3 = lazy(() => import("./Pages/ProductDetail/Chair/Chair3"));
const Chair4 = lazy(() => import("./Pages/ProductDetail/Chair/Chair4"));
const Chair5 = lazy(() => import("./Pages/ProductDetail/Chair/Chair5"));
const Chair6 = lazy(() => import("./Pages/ProductDetail/Chair/Chair6"));

const Loveseat1 = lazy(() =>
  import("./Pages/ProductDetail/Loveseat/Loveseat1")
);
const Loveseat2 = lazy(() =>
  import("./Pages/ProductDetail/Loveseat/Loveseat2")
);
const Loveseat3 = lazy(() =>
  import("./Pages/ProductDetail/Loveseat/Loveseat3")
);
const Loveseat4 = lazy(() =>
  import("./Pages/ProductDetail/Loveseat/Loveseat4")
);
const Loveseat5 = lazy(() =>
  import("./Pages/ProductDetail/Loveseat/Loveseat5")
);
const Loveseat6 = lazy(() =>
  import("./Pages/ProductDetail/Loveseat/Loveseat6")
);

const Daybed1 = lazy(() => import("./Pages/ProductDetail/Daybed/Daybed1"));
const Daybed2 = lazy(() => import("./Pages/ProductDetail/Daybed/Daybed2"));
const Daybed3 = lazy(() => import("./Pages/ProductDetail/Daybed/Daybed3"));
const Daybed4 = lazy(() => import("./Pages/ProductDetail/Daybed/Daybed4"));
const Daybed5 = lazy(() => import("./Pages/ProductDetail/Daybed/Daybed5"));
const Daybed6 = lazy(() => import("./Pages/ProductDetail/Daybed/Daybed6"));

const Sectional1 = lazy(() =>
  import("./Pages/ProductDetail/Sectional/Sectional1")
);
const Sectional2 = lazy(() =>
  import("./Pages/ProductDetail/Sectional/Sectional2")
);
const Sectional3 = lazy(() =>
  import("./Pages/ProductDetail/Sectional/Sectional3")
);
const Sectional4 = lazy(() =>
  import("./Pages/ProductDetail/Sectional/Sectional4")
);
const Sectional5 = lazy(() =>
  import("./Pages/ProductDetail/Sectional/Sectional5")
);
const Sectional6 = lazy(() =>
  import("./Pages/ProductDetail/Sectional/Sectional6")
);

const OfficeSofa1 = lazy(() =>
  import("./Pages/ProductDetail/OfficeSofa/OfficeSofa1")
);
const OfficeSofa2 = lazy(() =>
  import("./Pages/ProductDetail/OfficeSofa/OfficeSofa2")
);
const OfficeSofa3 = lazy(() =>
  import("./Pages/ProductDetail/OfficeSofa/OfficeSofa3")
);
const OfficeSofa4 = lazy(() =>
  import("./Pages/ProductDetail/OfficeSofa/OfficeSofa4")
);
const OfficeSofa5 = lazy(() =>
  import("./Pages/ProductDetail/OfficeSofa/OfficeSofa5")
);
const OfficeSofa6 = lazy(() =>
  import("./Pages/ProductDetail/OfficeSofa/OfficeSofa6")
);

const SleeperSofa1 = lazy(() =>
  import("./Pages/ProductDetail/SleeperSofa/SleeperSofa1")
);
const SleeperSofa2 = lazy(() =>
  import("./Pages/ProductDetail/SleeperSofa/SleeperSofa2")
);
const SleeperSofa3 = lazy(() =>
  import("./Pages/ProductDetail/SleeperSofa/SleeperSofa3")
);
const SleeperSofa4 = lazy(() =>
  import("./Pages/ProductDetail/SleeperSofa/SleeperSofa4")
);
const SleeperSofa5 = lazy(() =>
  import("./Pages/ProductDetail/SleeperSofa/SleeperSofa5")
);
const SleeperSofa6 = lazy(() =>
  import("./Pages/ProductDetail/SleeperSofa/SleeperSofa6")
);

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && (
        <LoginPopUp showLogin={showLogin} setShowLogin={setShowLogin} />
      )}

      <ScrollToTop />
      <Navbar setShowLogin={setShowLogin} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<Cart setShowLogin={setShowLogin} />} />

          <Route path="chairCollection" element={<ChairCollection />} />
          <Route path="loveseatCollection" element={<LoveseatCollection />} />
          <Route path="daybedCollection" element={<DaybedCollection />} />
          <Route path="sectionalCollection" element={<SectionalCollection />} />
          <Route
            path="officeSofaCollection"
            element={<OfficeSofaCollection />}
          />
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

          <Route
            path="sectionalCollection/sectional1"
            element={<Sectional1 />}
          />
          <Route
            path="sectionalCollection/sectional2"
            element={<Sectional2 />}
          />
          <Route
            path="sectionalCollection/sectional3"
            element={<Sectional3 />}
          />
          <Route
            path="sectionalCollection/sectional4"
            element={<Sectional4 />}
          />
          <Route
            path="sectionalCollection/sectional5"
            element={<Sectional5 />}
          />
          <Route
            path="sectionalCollection/sectional6"
            element={<Sectional6 />}
          />

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
      </Suspense>
      <RelatedProductsBlock />
      <Footer />
    </>
  );
}

export default App;
