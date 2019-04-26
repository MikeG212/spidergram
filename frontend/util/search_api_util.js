export const fetchUsers = (searchTerm) => {
    return $.ajax({
        method: 'GET',
        url: `api/users?username=${searchTerm}`,
    });
};