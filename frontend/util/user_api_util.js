export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}`,
    })
);

export const fetchUsers = data => (
    $.ajax({
        method: 'GET',
        url: `api/users/`,
        data
    })
);