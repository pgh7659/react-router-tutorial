import React from 'react';

const Post = ({ location, match }) => {
    console.log(location);
    console.log(match);
    return (
        <div>
            포스트 {match.params.id}
        </div>
    );
}

export default Post;