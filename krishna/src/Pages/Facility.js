import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));

const Facility = () => {
  return (

    <Suspense fallback={<div><Loading/></div>}>

        <Navbar activeUrl={"/Facility"}/>

    <div>Facility</div>

    </Suspense>
  )
}

export default Facility