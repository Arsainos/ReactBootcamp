import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Temych'
                }
            })
            this.setState({posts: updatedPosts})
            //console.log(response);
        })
        .catch(error => {
            console.log(error);
            this.setState({error: true})
        });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    };
    
    render () {
        let posts = <p style={{textAlign: 'center'}}> Something went wrong</p>;
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post key={post.id} 
                author={post.author}
                clicked={()=>this.postSelectedHandler(post.id)}
                title={post.title}/>
            })
        }      

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Blog;