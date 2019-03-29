export const allPosts = ({ posts }) => {
    debugger
    return Object.keys(posts).map(id => posts[id]);
};

export const commentsByPostId = ({ comments }, post_id) => {
    debugger
    const commentsByPostId = [];
    Object.keys(comments).forEach(commentId => {
        const comment = comments[commentId];
        if (comments[commentId].post_id === post_id) commentsByPostId.push(comment)
    })
    return commentsByPostId;
};