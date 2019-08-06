import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
   state = {
       auth: false
   }


    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {//<Route path="/" exact render={()=> <h1>HOME</h1>} /> 
                }
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null }
                    <Route path="/posts" exact component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
    
            </div>
        );
    }
}

export default Blog;