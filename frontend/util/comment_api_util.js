export const createComment = (data, success) => {
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data,
        success
    });
};