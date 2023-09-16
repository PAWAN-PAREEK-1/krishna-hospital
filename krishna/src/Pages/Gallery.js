import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import("../Components/Footer"));

const Gallery = () => {
  return (

    <Suspense fallback={<div><Loading/></div>}>

        <Navbar activeUrl={"/Gallery"}/>

    <div>

           <div className="hero-all">
          <h2>Gallery</h2>
        </div>

        <div className="index">
          
        </div>

    </div>


    <Footer />

    </Suspense>
  )
}

export default Gallery