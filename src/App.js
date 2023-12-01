import './App.css';
import Home from './component/Home.jsx'
import Navbar from './component/Navbar.jsx'
import Bullish from './component/Bullish.jsx';
import Footer from './component/Footer.jsx';
import FooterDown from './component/FooterDown';
import Roadmap from './component/Roadmap.jsx';
import Tokenomics from './component/Tokenomics.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Roadmap />
      <Tokenomics />
      <Bullish />
      <Footer />
      <FooterDown />
    </>
  );
}

export default App;
