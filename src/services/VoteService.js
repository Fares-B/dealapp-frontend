import {post} from "./FetchService";

export const postVote = vote => post("deal/" + vote.dealId + "/vote", vote);
