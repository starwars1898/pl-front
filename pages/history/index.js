import React from 'react'
import HistoryContainer from '@/container/history'
import Head from 'next/head'
import Layout from '@/components/Layout'
import TopBar from '@/components/Navigation/TopBar'

function HistoryPage() {
  return (
    <Layout>
      <Head>
            <title>History</title>
      </Head>
      <TopBar />
      <HistoryContainer />
    </Layout>
  )
}

export default HistoryPage