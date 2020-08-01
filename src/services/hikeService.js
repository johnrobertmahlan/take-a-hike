const BASE_URL = '/api/hikes/';

export default {
    create,
    createComment
};

function create(hike) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(hike)
    };
    return fetch(BASE_URL, options).then(res => res.json());
};

function createComment(comment, id) {
    console.log(comment, id);
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(comment)
    };
    return fetch(BASE_URL + id + '/comments', options).then(res => res.json());
};