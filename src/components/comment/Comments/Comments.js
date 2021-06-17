import moment from "moment";
import 'moment/locale/fr';
import {useEffect, useState} from "react";
import {getCommentsDeal} from "../../../services/CommentService";
import NewComment from "../NewComment/NewComment";
import {authentication} from "../../../services/AuthenticationService";
import UserLink from "../../deal/UserLink/UserLink";

moment.locale('fr');

export default function Comments(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsDeal(props.dealId).then(res => {
            setComments(res);
        })
    }, [props.dealId]);

    function addComment(comment) {
        setComments([...comments, JSON.parse(comment)]);
    }

    return <>
        <div className="bg-gray-800 px-5 mt-4 mb-2 rounded-md border-gray-900 border-t-2 pt-4">
            <div className="flex justify-between">
                <span className="border-gray-700 text-gray-400 border-b-3" >{comments.length} commentaires</span>
                <span className="text-indigo-400">{!authentication && <a href="/login" >Se connecter</a> }</span>
            </div>

            {comments.map( (comment, i) => {
                return <div key={comment._id} className={comments.length !== i + 1 ? "border-b-2 border-gray-700": ""}>
                    <UserLink author={comment.author} />
                    <p className="text-gray-200">{comment.content}</p>
                    <span className="text-gray-400 text-sm flex justify-end">{moment(comment.created_at).fromNow()}</span>
                </div>
            })}
            {comments.length === 0 && <span className="text-center w-full">Soyez le premier à commenter</span>}
        </div>
        { authentication &&
            <NewComment dealId={props.dealId} addComment={addComment} />
        }
    </>
}
