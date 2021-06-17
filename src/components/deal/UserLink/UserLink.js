export default function UserLink({author}) {
    return <span className="flex">
        <a href={ "/profile/" + author._id }>
            <img
                className="h-8 w-8 rounded-full"
                src={ author.img ? author.img : "https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png"}
                alt="img de profil"
            />
        </a>
        <a className="text-indigo-400 h-full" href={"/profile/" + author._id}>{author.name}</a>
    </span>;
}
