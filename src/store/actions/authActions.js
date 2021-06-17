import {postLoginService} from "../../services/UserService";

export const login = (user) => {
    return dispatch => {
        postLoginService(user)
            .then(res => {
                console.log(res);
                dispatch({
                    type: "LOGIN",
                    token: res.data
                });
            });
    };
};
