import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));

const Home = () => {
  return (

    <Suspense fallback={<div><Loading/></div>}>

        <Navbar activeUrl={"/"}/>

    <div>Home</div>

    </Suspense>
  )
}

export default Home