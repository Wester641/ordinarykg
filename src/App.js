import MySlider from "./components/ simpleslider/SimpleSlider";
import PromoSection from "./components/promoSection/PromoSection";
import Header from "./components/header/Header";
import Section from "./components/main/Section";
import ProductsCards from "./components/productsCards/ProductsCards";
import NavbarSection from "./components/header/navbar/NavbarSection";
import Promosale from "./components/header/promoSale/Promosale";
import Footer from "./components/footer/Footer";
import PromoBanner from "./components/promoSection/PromoBanner";
import PromoSection2 from "./components/promoSection/PromoSection2";
import Descriptions from "./components/descriptions/Descriptions";

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
      <Section />

      <Footer />
    </div>
  );
}

export default App;
