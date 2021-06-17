import DealsScreen from "../deal/DealsScreen/DealsScreen";
import React, {useEffect, useState} from "react";
import {get} from "../../services/FetchService";

export default function GroupScreen(props) {
    const [group, setGroup] = useState({name: ""});
    const groupId = props.match.params.groupId;

    useEffect(() => {
        get("group/" + groupId ).then(g => {
            setGroup(g);
        });
    }, [groupId]);

    return <>
        <h1 className="text-gray-200 pl-6 text-4xl font-medium pt-6">{group.name}</h1>
        <DealsScreen filter={"groups"} value={groupId} />
    </>
}
