import {fetchCommentsOfPost, fetchPosts, fetchReactionsOfComment, wait} from './api.js';

const fetchComments = [];
const fetchCommentsReactions = [];

async function onLoad() {
    fetchPosts().then((result => {
        console.log(result);
    }))
    await wait(2000);
    fetchCommentsOfPost(fetchComments).then(((result) => {
        console.log(result);
    }));
    await wait(3000);
    fetchReactionsOfComment(fetchCommentsReactions).then((result) => {
        console.log(result);
    });
}

onLoad();


