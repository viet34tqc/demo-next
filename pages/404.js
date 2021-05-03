import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function NotFound() {
    const router = useRouter();
    useEffect( () => {
        setTimeout( () => {
            router.push( '/' );
        }, 3000 );
    }, [] );
    return (
        <div>
            <Head>
                <title>Ninja | 404</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className="not-found">
                <h1>Oopps...</h1>
                <p>This page can not be found</p>
                <Link href="/"><a href="">Go back to homepage</a></Link>
            </div>
        </div>
    );
}
