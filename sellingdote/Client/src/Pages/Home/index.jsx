import React from 'react'
import scss from './index.module.scss';
import HomePage_Section_1 from './Section-1';
import HomePage_Section_2 from './Section-2';
import HomePage_Section_3 from './Section-3';
import HomePage_Section_4 from './Section-4';
import HomePage_Section_5 from './Section-5';

const HomePage = () => {
  return (
    <>
        <HomePage_Section_1/>
        <HomePage_Section_2/>
        <HomePage_Section_3/>
        <HomePage_Section_4/>
        <HomePage_Section_5/>
    </>
  )
}

export default HomePage