export default function WebSiteLink({deal}) {
    return <div className="px-6 inline-flex items-center ml-auto lg:mb-0 px-2 py-1  bg-indigo-500 border-2 border-indigo-500 rounded-full">
        {deal.code !== '' && <span className="mr-1">
                                {deal.code} |
                            </span>}
        <a
            href={deal.link}
            className="text-white tracking-wide font-medium"
            target="_blank"
            rel="noreferrer"
        >
            {deal.code.empty ? "Profiter du code" : "Voir le deal" }
        </a>
    </div>
}
