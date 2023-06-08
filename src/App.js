import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routers/Routers";
import NavbarCompt from "./components/layouts/navbar/NavbarCompt";
import Footer from "./components/layouts/footer/Footer";

const App = () => {
  return (
    <Router>
      <NavbarCompt />
      <Routers />
      <Footer />
    </Router>
  );
};

export default App;
