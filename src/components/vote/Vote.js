import {postVote} from "../../services/VoteService";
import {useEffect, useState} from "react";
import {initialStateDeal} from "../../services/InitialState";


export const Vote = props => {

    const [deal, setDeal] = useState(initialStateDeal);
    const [disabled, setDisabled] = useState(false);

    useEffect( () => {
        setDeal(props.deal);
    }, [props.deal]);

    const handleVote = e => {
        if (disabled) return;
        const vote = e.target.dataset.value !== "false";

        postVote({ vote: vote, dealId: deal._id } ).then(r => {
            if (JSON.parse(r) === true) {
                setDisabled(true);
                setDeal({...deal, vote: deal.vote + ( vote ? 1 : -1 )});
            }
        });
    };

    return <div className="flex flex-row  h-10 w-24 rounded-lg relative">
        <button
            className="font-semibold border-r bg-blue-700 hover:bg-blue-600 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer leading-loose">
            <span className="m-auto h-full w-full text-2xl" onClick={handleVote} data-value="false">-</span>
        </button>

        <input
            type="hidden"
            className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
            readOnly
            name="custom-input-number"
        />
        <div className="bg-indigo-100 w-24 text-xs md:text-base flex items-center justify-center cursor-default">
            <span>{ deal.vote }</span>
        </div>

        <button
            className="font-semibold border-l bg-red-700 hover:bg-red-600 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer leading-loose">
            <span className="m-auto h-full w-full text-2xl" onClick={handleVote} data-value="true">+</span>
        </button>
    </div>;
}

