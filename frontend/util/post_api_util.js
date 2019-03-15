export const fetchPosts = function (success) {
    $.ajax({
        method: 'GET',
        url: 'api/posts',
        success,
        error: () => console.log('error')
    });
};