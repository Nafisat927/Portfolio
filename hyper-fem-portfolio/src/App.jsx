import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Recipes from './components/Recipes';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/recipes" element={<Recipes />} />
          {/* Placeholder for Contact if needed, or redirect to Home */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
