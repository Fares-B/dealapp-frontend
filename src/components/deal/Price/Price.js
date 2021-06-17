
export default function Price(props) {
    const {price = false, startingPrice = false, code = "false"} = props.deal;

    function getPercent() {
        const percent = (startingPrice - price) * 100 / startingPrice;
        return `-${percent.toFixed(0)}%`;
    }

    function getPrice() {
        return <>
            <span className="text-red-500">{code !== ""? (price === 0 ? "GRATUIT": price+"%") : price+"€"} </span>
            {startingPrice && <>
                <span className="text-gray-500 line-through">{startingPrice}€ </span>
                <span className="text-gray-300">{getPercent()}</span>
            </>}
            <span className="text-gray-500" > | </span>
        </>;
    }

    return (
        <span className="font-bold text-lg text-gray-100 ">
            {price !== false && getPrice()}
        </span>
    );
}
