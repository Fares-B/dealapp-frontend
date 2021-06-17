import {get, post} from "./FetchService";


export const getCommentsDeal = dealId => {

    return get("deal/" + dealId + "/comments");
};

export const postComment = (dealId, comment) => {
    return post("deal/" + dealId + "/comment/new", comment);
};
