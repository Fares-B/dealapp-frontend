import moment from "moment";
import 'moment/locale/fr';
import InfiniteScroll from 'react-infinite-scroll-component';


import Price from "../Price/Price";
import WebSiteLink from "../WebSiteLink/WebSiteLink";
import UserLink from "../UserLink/UserLink";
import {Vote} from "../../vote/Vote";
import {Link} from "react-router-dom";
import {LinkOneGroup} from "../group/LinkGroup";

moment.locale('fr');

export function Deals({deals, addDeals}) {


    return <InfiniteScroll
        dataLength={deals.length} //This is important field to render the next data
        next={addDeals}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p style={{textAlign: 'center'}}>
                <b>Yay! You have seen it all</b>
            </p>
        }
        className="bg-gray-900 md:px-20 lg:px-52 px-5 py-2">
        {deals.map((deal, index) => (
            <div className="sm:flex my-4 bg-gray-800 w-full border-t-2 border-gray-900 rounded-md" key={index}>
                <a href={"/deal/" + deal._id} className="h-full transition duration-500 ease-in-out transform sm:hover:translate-x-1 hover:shadow-lg">
                    <img alt="deal"
                         className="inline-block object-cover object-center min-w-48 max-h-44 bg-gray-100 rounded"
                         src={deal.image || "https://dummyimage.com/302x302/94a3b8/ffffff"}
                    />
                </a>
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

                        <Link to={{pathname: '/deal/' + deal._id, deal: deal}}>
                            <span className="font-bold text-lg text-gray-100 ">{deal.title}</span>
                        </Link>

                        <span>
                            <Price deal={deal} />
                            <LinkOneGroup groups={deal.groups} />
                        </span>
                        <span className="text-sm text-gray-300 uppercase font-bold">{deal.description.length > 200 ? deal.description.substring(0, 200) + "..." : deal.description}</span>
                    </span>

                    <div className="flex items-center flex-wrap pl-4 mb-0">
                        <UserLink author={deal.author} />
                        <WebSiteLink deal={deal}/>
                    </div>
                </div>

            </div>
        ))}
    </InfiniteScroll>;
}

