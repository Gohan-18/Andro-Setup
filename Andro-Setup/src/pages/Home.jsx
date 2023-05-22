import React, { useEffect } from 'react'
import Header from '../components/Header'
import HomeSetups from '../components/HomeSetupCards'
import { SetupState } from '../SetupContext';

const Home = () => {

  const { activeFilter, setActiveFilter, navbarState, setNavbarState } = SetupState();

  useEffect(() => {
    setActiveFilter('Home');
    setNavbarState(false);
  }, [])

  return (
    <>
      <Header/>
      <HomeSetups/>
    </>
  )
}

export default Home