import React from 'react';
import Axuliary from '../../hoc/Axuliary';

const layout = (props) => (
    <Axuliary>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Axuliary>
);

export default layout;