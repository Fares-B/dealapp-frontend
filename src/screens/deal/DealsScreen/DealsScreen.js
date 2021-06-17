import {Deals} from "../../../components/deal/Deals/Deals";
import {useEffect, useState} from "react";
import {getDeals} from "../../../services/DealService";

const DealsScreen = props => {
    const [deals, setDeals] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        addDeals();
    }, []);


    function addDeals() {
        console.log(deals)
        getDeals(props.filter, page, props.value || "").then(newDeals => {
            setPage(page+1);
            setDeals(deals.concat(newDeals));
        });
    }

    return <Deals deals={deals} addDeals={addDeals} />;
};

export default DealsScreen;
