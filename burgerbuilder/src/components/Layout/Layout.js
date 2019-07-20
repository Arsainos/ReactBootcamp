import React from 'react';
import Axuliary from '../../hoc/Axuliary';

import classes from './Layout.css';

const layout = (props) => (
    <Axuliary>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Axuliary>
);

export default layout;