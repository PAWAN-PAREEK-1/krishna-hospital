import { lazy, Suspense } from 'react';
import "../Style/Home.css";
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));

const Home = () => {
  return (

    <Suspense fallback={<div><Loading /></div>}>

      <Navbar activeUrl={"/"} />

      <div>

       <div className="main-index">
        dvdfv
       </div>
      </div>

    </Suspense>
  )
}

export default Home