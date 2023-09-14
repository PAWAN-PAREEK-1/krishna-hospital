import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));

const Blog = () => {
  return (

    <Suspense fallback={<div><Loading/></div>}>

        <Navbar activeUrl={"/Blog"}/>

    <div>about</div>

    </Suspense>
  )
}

export default Blog