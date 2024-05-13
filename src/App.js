// import Example from "./components/Example/Example";
import MySlider from "./components/ simpleslider/SimpleSlider";
import SimpleSlider from "./components/ simpleslider/SimpleSlider";
import PromoSection from "./components/banner/PromoSection";

import Header from "./components/header/Header";
import Section from "./components/main/Section";

function App() {
  return (
    <div>
      <Header />
      {/* <SimpleSlider /> */}
      <MySlider />
      <PromoSection />
      <Section />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <Example /> */}
    </div>
  );
}

export default App;
