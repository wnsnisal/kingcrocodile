import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<Home />} />
        <Route exact path='/roadmap' element={<Home />} />
        <Route exact path='/faq' element={<Home />} />
        <Route exact path='/ourteam' element={<Home />} />
        {/* <HeroSection />
        <About />
        <RoadMap />
        <Faq />
        <OurTeam /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
