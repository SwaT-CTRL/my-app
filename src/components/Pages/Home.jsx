import React, { Suspense, lazy } from 'react';
import Header from '../Header';
import Firstsection from '../Firstsection'
// import Homesectiontwo from '../Homesectwo';
// import  Resthome  from '../Resthome';
// import Footer from '../Footer';
const Homesectiontwo = lazy(()=>import("../Homesectwo"));
const Resthome = lazy(()=>import("../Resthome"));
const Footer = lazy(()=>import("../Footer"));

const Home = () => {
  return (
    <>
    <Header searchBar={false} />
    <Firstsection />
    <Suspense fallback='Loading...'><Homesectiontwo /></Suspense>
    <Suspense fallback='Loading...'><Resthome /></Suspense>
    <Suspense fallback='Loading...'><Footer /></Suspense>
    </>
  )
}

export default Home