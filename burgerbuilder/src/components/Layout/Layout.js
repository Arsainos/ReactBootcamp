import React, { Component } from 'react';
import Axuliary from '../../hoc/Axuliary';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    render(){
        return(
            <Axuliary>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}
                />
                <div>Sidebar, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Axuliary>
        )
    }
};

export default Layout;