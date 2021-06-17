import {useEffect, useState} from "react";
import {postComment} from "../../../services/CommentService";
import {ChatIcon} from "@heroicons/react/outline";
import {user} from "../../../services/AuthenticationService";

export default function NewComment(props) {
    const [form, setForm] = useState({
        content: '',
        author: user
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setForm( {...form, [name]: value});
    }
    function handleSubmitComment(e) {
        e.preventDefault();

        postComment(props.dealId, form)
            .then(comment => {
                if (comment !== false) {
                    props.addComment(comment);
                    e.target.reset();
                }
            });
    }

    return (
        <div className="flex mx-auto items-center justify-center text-white">
            <form className="w-full bg-gray-800 rounded-lg px-4 pt-2"
                onSubmit={handleSubmitComment}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <h2 className="px-4 pt-3 pb-2 text-lg">Ajouter un commentaire</h2>
                    <div className="w-full md:w-full px-3 mb-2 mt-2">
                        <textarea
                            className="bg-gray-100 rounded border border-gray-600 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-gray-500 bg-gray-600"
                            name="content"
                            onChange={handleChange}
                            placeholder='Écrivez votre commentaire'
                            value={form.content}
                            required
                        />
                    </div>
                    <div className="w-full md:w-full flex justify-end md:w-full px-3">
                        <div className="-mr-1">
                            <button
                                type="submit"
                                className="bg-indigo-500 border-2 border-indigo-500 rounded-full font-medium py-1 px-1 tracking-wide mr-1 hover:bg-indigo-600"
                            >
                                <ChatIcon className="h-7" />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
