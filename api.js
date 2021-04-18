export const api = './postData.json'

export async function wait(miliseconds) {
    return new Promise(
        resolve => setTimeout(resolve, miliseconds)
    );
}

export async function fetchPosts() {
    const response = await fetch(api);
    const data = await response.json();
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            data.map((val) => {
                return {id: val.id, title: val.title, content: val.content};
            })
        ), 100);
    });
}

export async function fetchCommentsOfPost(id) {
    const response = await fetch(api);
    id = await response.json();
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            id.map((val) => {
                return val.comments.reduce((aggr, val) => {
                    return {author: aggr.author = val.author, content: aggr.content = val.content};
                }, {});
            })
        ), 100);
    });
}

export async function fetchReactionsOfComment(id) {
    const response = await fetch(api);
    id = await response.json();
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            id.map((val) => {
                return val.comments.reduce((aggr, val) => {
                    return aggr = val.reactions;
                }, {});
            })
        ), 100);
    });
}


