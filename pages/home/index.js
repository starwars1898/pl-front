import React from 'react'
import HomeContainer from '@/container/home'
import Head from 'next/head'
import Layout from '@/components/Layout'
import TopBar from '@/components/Navigation/TopBar'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <TopBar />
      <HomeContainer />
    </Layout>
  )
}

export default HomePage