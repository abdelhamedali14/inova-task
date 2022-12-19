import { Allgyms } from "./components/allgyms/Allgyms";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { MainSection } from "./mainSection/MainSection,";

function App() {
  return (
    <>
      <NavBar />
      <MainSection />
      <Allgyms />
      <Footer/>
    </>
  );
}

export default App;
