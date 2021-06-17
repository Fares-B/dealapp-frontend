import moment from "moment";
import 'moment/locale/fr';
import {useEffect, useState} from "react";

import {Vote} from "../../vote/Vote";
import Comments from "../../comment/Comments/Comments";
import Price from "../Price/Price";
import UserLink from "../UserLink/UserLink";
import WebSiteLink from "../WebSiteLink/WebSiteLink";
import {initialStateDeal} from "../../../services/InitialState";
import {LinkGroups} from "../group/LinkGroup";
moment.locale('fr');

export function Deal(props) {
    const [deal, setDeal] = useState(initialStateDeal);

    useEffect(() => {
        setDeal(props.deal);
    }, [props.deal]);

    return <div className="bg-gray-900 md:px-20 lg:px-52 px-5 py-10 h-full">
        <div className="bg-gray-800 px-3 rounded-md border-gray-900 border-t-2">
            <div className="sm:flex my-4 w-full">
                <img alt="testimonial"
                     className="inline-block object-cover object-center w-48 max-h-44 bg-gray-100 rounded"
                     src={ deal.image ? deal.image : "https://dummyimage.com/302x302/94a3b8/ffffff"}
                />
                <div className="h-full w-full text-left p-4">
                    <span className="flex flex-col flex-grow pt-1 pl-4">
                        <span className="flex justify-between">
                            <span className="-mt-3">
                                <Vote deal={deal} />
                            </span>
                            <span className="text-gray-400 text-sm">
                                {moment(deal.created_at).fromNow()}
                            </span>
                        </span>
                        <span className="font-bold text-lg text-gray-100 ">{deal.title}</span>
                        <span>
                            <Price deal={deal} />
                        </span>
                    </span>

                    <div className="flex items-center flex-wrap pl-4 mb-0">
                        <UserLink author={deal.author} />
                        <WebSiteLink deal={deal}/>
                    </div>
                </div>
            </div>

            <span className="text-sm text-gray-300 text-lg">{deal.description}</span>
            <LinkGroups groups={deal.groups} />
        </div>

        {deal._id && <Comments dealId={deal._id} />}

    </div>;
}
