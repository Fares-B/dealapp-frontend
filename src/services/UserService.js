import { post } from "./FetchService";

const urlApi = "http://localhost:3001/";

export const postLoginService = user => {
    console.log(user);
    return post(urlApi + "login", user);
};
