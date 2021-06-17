let userStorage = localStorage.getItem("user");
let auth = false;
if (userStorage !== null) {
    userStorage = JSON.parse(userStorage);
    if (userStorage !== "error") {
        const ONE_HOUR = 60 * 60 * 1000; /* ms */
        if ( (new Date().getTime() - userStorage.expirationTime) < ONE_HOUR ) {
            auth = true;
        }
    }
}

export const authentication = auth;

export const user = userStorage;
