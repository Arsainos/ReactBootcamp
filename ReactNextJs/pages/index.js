import React, { Component } from 'react';
import Link from 'next/link';

class IndexPage extends Component {
    static async getInitialProps(context) {
        console.log(context);
        return {};
    }

    render(){
        return (
            <div>
                <h1>Main Page</h1>
                <p>Go to <Link href="/auth">Auth</Link></p>
            </div>
        )
    };
};

export default IndexPage;