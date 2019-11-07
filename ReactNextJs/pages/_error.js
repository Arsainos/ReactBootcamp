import React from 'react';
import Link from 'next/link';

const indexPage = () => {
    return (
        <div>
            <h1>Ooops, something went wrong</h1>
            <p>Go to <Link href="/">going back</Link></p>
        </div>
    )
};

export default indexPage;