import Image from "next/image"

const Card = ({ user, selected }) => {
    return (
        <div className={`px-3 py-1 rounded-md flex space-x-2 items-center my-2 bg-slate-${selected ? "200" : "100"} hover:bg-slate-200 cursor-pointer`}>
            <Image src={user.avatar} priority alt="dp" loader={({ src, width, quality }) => {
                return `${src}?w=${width}&q=${quality || 75}`
            }} width={40} height={40} className="rounded-full" />
            <p>{user.profile.firstName} {user.profile.lastName}</p>
        </div>
    )
}

export default Card