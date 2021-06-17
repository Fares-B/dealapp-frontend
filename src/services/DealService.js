import {get, post} from "./FetchService";

export const getDeals = (filter = "", page = 0, value= "") => get(`deals?filter=${filter}&page=${page}&value=${value}`);

export const getDeal = id => get("deal/" + id);

export const postDeal = deal => post("deal/new", deal);

