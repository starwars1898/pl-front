import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import LoginIndex from '@/components/Login'

function LoginContainer() {
  return (
    <Layout>
        <Head>
            <title>Login</title>
        </Head>
        <LoginIndex />
    </Layout>
  )
}

export default LoginContainer