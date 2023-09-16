import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import("../Components/Footer"));

const Facility = () => {
  return (

    <Suspense fallback={<div><Loading /></div>}>

      <Navbar activeUrl={"/Facility"} />

      <div>  <div className="hero-all">
        <h2>Patients & Visitors</h2>
      </div></div>




      <Footer />

    </Suspense>
  )
}

export default Facility