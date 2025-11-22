import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Diary from './components/Diary';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/diary" element={<Diary />} />
          {/* Placeholder for Contact if needed, or redirect to Home */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
