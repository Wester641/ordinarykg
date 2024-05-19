import MySlider from "./components/ simpleslider/SimpleSlider";

import Header from "./components/header/Header";
// import Section from "./components/main/Section";
import ProductsCards from "./components/productsCards/ProductsCards";
import NavbarSection from "./components/header/navbar/NavbarSection";
import Promosale from "./components/header/promoSale/Promosale";
import Footer from "./components/footer/Footer";
import PromoBanner from "./components/promoSection/PromoBanner";
import PromoSection2 from "./components/promoSection/PromoSection2";
import Descriptions from "./components/descriptions/Descriptions";
import Descriptions2 from "./components/descriptions/Descriptions2";
import Descriptions3 from "./components/descriptions/Descriptions3";
import DescMaps from "./components/descriptions/DescMaps";
import DescEnd from "./components/descriptions/DescEnd";
import Portfolio from "./components/promoSection/Portfolio";
import PromoSection from "./components/promoSection/PromoSection";

function App() {
  return (
    <div>
      <Promosale />
      <Header />
      <NavbarSection />
      <MySlider />
      <PromoSection />
      <ProductsCards />
      <PromoBanner />
      <PromoSection2 />
      <Descriptions />
      <Descriptions2 />
      <Descriptions3 />
      <DescMaps />
      <DescEnd />
      <Portfolio />
      {/* <Section /> */}

      <Footer />
    </div>
  );
}

export default App;
