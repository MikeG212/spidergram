export const fetchPosts = function (success) {
    $.ajax({
        method: 'GET',
        url: 'api/posts',
        success,
    });
};

export const fetchPost = function (id, success) {
    $.ajax({
        method: 'GET',
        url: `api/posts/${id}`,
        success
    });
};

export const createPost = (formData, success) => {
    $.ajax({
        method: 'POST',
        url: 'api/posts',
        contentType: false,
        processData: false,
        data: formData,
        success
    });
};

render() {
    return (
        <div>
            <Form fetchPosts={this.fetchPosts}/>
            <PostIndex post={this.state.posts}/>
        </div>
    )
}