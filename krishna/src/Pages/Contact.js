import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));

const Contact = () => {
  return (

    <Suspense fallback={<div><Loading/></div>}>

        <Navbar activeUrl={"/Contact"}/>

    <div>Contact</div>

    </Suspense>
  )
}

export default Contact