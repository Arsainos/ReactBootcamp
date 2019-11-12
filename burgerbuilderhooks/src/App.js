import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurderBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';

const Checkout = React.lazy(() => {
  return import ('./containers/Checkout/Checkout');
});

const Orders = React.lazy(() => {
  return import ('./containers/Orders/Orders');
});

const Auth = React.lazy(() => {
  return import ('./containers/Auth/Auth');
});

const app = props => {
  
  useEffect(() => {
    props.onAuthCheckState();
  }, [props]);
  
  let routes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if(props.isAuthenticated)
  {
    routes = (
      <Switch>
        <Route path="/checkout" render={(props) => <Checkout {...props}/>} />
        <Route path="/orders" render={(props) => <Orders {...props}/>} />
        <Route path="/auth" render={(props) => <Auth {...props}/>} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
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
