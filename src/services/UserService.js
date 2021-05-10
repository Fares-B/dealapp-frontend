import {post} from "./FetchService";

const urlApi = "http://localhost:3001/";

export const postLoginService = user => {
    console.log(user);
    return post(urlApi + "login", user);
};

export const postRegisterService = user => {
    console.log(user);
    return post(urlApi + "register", user);
};

export const userNameValid = user => {
    return post(urlApi + "users/username/valid", user);
};
