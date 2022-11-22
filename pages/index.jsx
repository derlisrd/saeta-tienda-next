import React from 'react'
import Cabezera from '../Components/Cabezera'
import AppLayout from '../Layout/AppLayout'
import LastProducts from '../Sections/LastProducts'


const HomePage = () => {
  return (
  <AppLayout>
    <Cabezera title="Inicio" />

    <LastProducts />
  </AppLayout>
  )
}

export default HomePage
