import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurderBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import ('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import ('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import ('./containers/Auth/Auth');
});

const app = props => {
  
  useEffect(() => {
    props.onAuthCheckState();
  }, []);
  
  let routes = (
    <Switch>
      <Route path="/auth" component={asyncAuth} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if(props.isAuthenticated)
  {
    routes = (
      <Switch>
        <Route path="/checkout" component={asyncCheckout} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/auth" component={asyncAuth} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(app);
