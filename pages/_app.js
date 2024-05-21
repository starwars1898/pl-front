import React, { useEffect, useState } from 'react'
import '@/assets/styles/globals.css'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GetLocalToken } from '@/utils/function'
import toast, { Toaster } from 'react-hot-toast'
import CircularLoadingBody from '@/components/Suspense/circular-loading'

function App({ Component, pageProps }) {
    const router = useRouter()
    const queryClient = new QueryClient()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = GetLocalToken()

        if (token === null && router.pathname !== '/login') {
            router.push('/login')
            toast.error('Session Expired.')
        } 

        setLoading(false)

    }, [router.pathname])

    return (
        <QueryClientProvider client={queryClient}>
            {loading ? <CircularLoadingBody /> : <Component {...pageProps} />}
            <Toaster position="top-right" reverseOrder={false} />
        </QueryClientProvider>
    );
}

export default App;