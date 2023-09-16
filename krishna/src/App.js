import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Loading = lazy(() => import('./Components/Loading'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Pateint = lazy(() => import('./Pages/Pateint'));
const Facility = lazy(() => import('./Pages/Facility'));
const Gallery = lazy(() => import('./Pages/Gallery'));
const Blog = lazy(() => import('./Pages/Blog'));
const Contact = lazy(() => import('./Pages/Contact'));
const Pblog = lazy(() => import('./Pages/Pblog'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div><Loading/></div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Pateint" element={<Pateint/>} />
            <Route path="/Facility" element={<Facility />} />
            <Route path="/Gallery" element={<Gallery/>} />
            <Route path="/Blog" element={<Blog/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Pblog" element={<Pblog/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
