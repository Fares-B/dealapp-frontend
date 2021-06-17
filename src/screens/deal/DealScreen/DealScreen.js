import {Deal} from "../../../components/deal/Deal/Deal";
import {useEffect, useState} from "react";
import {getDeal} from "../../../services/DealService";
import {initialStateDeal} from "../../../services/InitialState";

const DealScreen =  (props) => {
    const [deal, setDeal] = useState(initialStateDeal);
    useEffect(() => {
        if (props.location.deal) {
            setDeal(props.location.deal)
        } else {
            getDeal(props.match.params.dealId).then(data => {
                setDeal(data);
            })
        }
    }, [props.match.params.dealId]);

    return <Deal deal={deal} />;
};

export default DealScreen;
