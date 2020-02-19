import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages';

const Posts = ({ match }) => {
    console.log(match);
    return (
        <div>
            <h1>Post List</h1>
            <ul>
                <li><Link to={`${match.url}/1`}>POST #1</Link></li>
                <li><Link to={`${match.url}/2`}>POST #2</Link></li>
                <li><Link to={`${match.url}/3`}>POST #3</Link></li>
                <li><Link to={`${match.url}/4`}>POST #4</Link></li>
            </ul>
            <Route exact path={match.url} render={() => (<h3>Please select any post.</h3>)} />
            <Route path={`${match.url}/:id`} component={Post} />
        </div>
    );
}

export default Posts;