import Head from 'next/head'
import React from 'react'

const Cabezera = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default Cabezera
