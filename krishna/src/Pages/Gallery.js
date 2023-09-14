import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));

const Gallery = () => {
  return (

    <Suspense fallback={<div><Loading/></div>}>

        <Navbar activeUrl={"/Gallery"}/>

    <div>Gallery</div>

    </Suspense>
  )
}

export default Gallery