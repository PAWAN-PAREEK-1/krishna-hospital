import { lazy, Suspense } from 'react';
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));

const About = () => {
  return (

    <Suspense fallback={<div><Loading/></div>}>

        <Navbar/>

    <div>about</div>

    </Suspense>
  )
}

export default About