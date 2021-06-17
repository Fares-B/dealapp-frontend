import {useHistory} from "react-router-dom";
import {get} from "./FetchService";

export default function LogoutService() {
    const history = useHistory()

    get('logout')
        .then(data => {
            console.log(data)
            localStorage.removeItem('user');
            history.push('/');
        });

    return <></>;

}
