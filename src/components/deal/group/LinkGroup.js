import {useEffect, useState} from "react";

export function LinkOneGroup({groups}) {
    const group = groups.length !== 0 ? groups[0].name : 'Pas de groupe';
    const link = groups.length !== 0 ? groups[0]._id : "";
    console.log(groups);
    return <a href={"/group/" + link} className="text-indigo-400">
        {group}
    </a>;
}

export function LinkGroups({groups}) {
    console.log(groups)
    return <div className="w-full h-11 px-3 mt-3 flex">
        {groups.map((group, index) => {
            return <a href={"/group/" + group._id} key={index} className="hover:bg-gray-600 shadow-sm px-3 mx-3 border-2 border-indigo-500 bg-gray-500 h-full text-2xl text-gray-100">
                {group.name}
            </a>
        })}
    </div>;
}
