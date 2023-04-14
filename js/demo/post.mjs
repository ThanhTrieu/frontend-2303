import { api } from "./services/api.mjs";

function getDataPost(id) {
    const data = api.getDataPostById(id)
    data.then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
}
//getDataPost(1);
async function getDataPostV2(id) {
    const data = await api.getDataPostById(id);
    if(data.hasOwnProperty('id')){
        const comments = await api.getDataCommentsByPostId(data.id);
        //console.log(comments);
        return comments;
    }
}
getDataPostV2(10).then(res => { console.log(res)}).catch(err => {console.log(err)});