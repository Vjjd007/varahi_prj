import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogList from './blog_pages/BlogList';
import BlogPost from './blog_pages/BlogPost';

export default function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </LangProvider>
    </BrowserRouter>
  );
}
