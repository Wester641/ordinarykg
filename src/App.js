import MySlider from "./components/ simpleslider/SimpleSlider";
import PromoSection from "./components/banner/PromoSection";
import Header from "./components/header/Header";
import Section from "./components/main/Section";
import ProductsCards from "./components/productsCards/ProductsCards";

function App() {
  return (
    <div>
      <Header />
      <MySlider />
      <PromoSection />
      <ProductsCards />
      <Section />
    </div>
  );
}

export default App;
