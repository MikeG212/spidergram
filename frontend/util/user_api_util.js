export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}`,
    })
);

export const searchUsers = search_term => (
    $.ajax({
        method: 'GET',
        url: `api/users/search`,
        data: { search_term: search_term }
    })
);

export const updateUser = user => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        dataType: 'json',
        contentType: false,
        processData: false,
        data: user,
    })
);