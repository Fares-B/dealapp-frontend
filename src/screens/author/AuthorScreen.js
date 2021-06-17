import DealsScreen from "../deal/DealsScreen/DealsScreen";
import React, {useEffect, useState} from "react";
import {get} from "../../services/FetchService";

export default function AuthorScreen(props) {
    const [author, setAuthor] = useState({name: ""});
    const authorId = props.match.params.authorId;

    useEffect(() => {
        get("user/" + authorId ).then(a => {
            setAuthor(a);
        });
    }, [authorId]);

    return <>
        <h1 className="text-gray-200 pl-6 text-4xl font-medium pt-6">Profil de {author.name}</h1>
        <DealsScreen filter={"author"} value={authorId} />
    </>;
}
