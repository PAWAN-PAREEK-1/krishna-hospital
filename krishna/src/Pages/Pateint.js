import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import("../Components/Footer"));
const Price = lazy(() => import("../Components/Price"));

const Pateint = () => {
  return (

    <Suspense fallback={<div><Loading/></div>}>

        <Navbar activeUrl={"/Pateint"}/>

    <div>
    <div className="hero-all">
          <h2>Patients & Visitors</h2>
        </div>

      <Price/>
        <Footer />
    </div>

    </Suspense>
  )
}

export default Pateint