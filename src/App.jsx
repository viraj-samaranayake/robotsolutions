import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/robot-solutions/" element={<Home />} />
          <Route path="/robot-solutions/services" element={<Services />} />
          <Route path="/robot-solutions/about" element={<About />} />
          <Route path="/robot-solutions/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
