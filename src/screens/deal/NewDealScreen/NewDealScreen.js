import {NewDeal} from "../../../components/deal/NewDeal/NewDeal";
import {authentication} from "../../../services/AuthenticationService";
import {FormLogin} from "../../../components/user/FormLogin/FormLogin";

const NewDealScreen =  () => {
    if (!authentication) {
        return <FormLogin />;
    }
    return <NewDeal />;
};

export default NewDealScreen;
