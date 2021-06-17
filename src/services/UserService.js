import {get, post} from "./FetchService";

export const postLoginService = user => {
    return post("login", user);
};

export const postRegisterService = user => {
    return post("register", user);
};

export const userNameValid = user => {
    return post("users/username/valid", user);
};

export const getUserInfo = async () => {
    return await get("connected");
};

export const getUserLogout = () => {
    return get("logout");
};
