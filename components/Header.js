import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
function Header() {
    return (
        <nav>
            <Link href="/">
                <a className="logo"><Image src="/logo.png" width={ 36 } height={ 42 } /></a>
            </Link>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninjas</a></Link>
        </nav>
    );
}

export default Header;
