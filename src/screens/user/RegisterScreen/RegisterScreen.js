import {FormRegister} from "../../../components/user/FormRegister/FormRegister";
import {authentication} from "../../../services/AuthenticationService";
import App from "../../../App";

const RegisterScreen =  () => {

    if (authentication) {
        return <App />
    }
    return <FormRegister name="Nouveau" />;
};

export default RegisterScreen;
