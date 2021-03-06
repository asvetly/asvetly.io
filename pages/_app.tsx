import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: any) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
                page_path: url,
            })
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <Component {...pageProps} />;
}

export default MyApp;
