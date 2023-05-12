import Image from "next/image"

const UserDetail = ({user}) => {
    return (
        <div className="flex flex-col items-center space-y-4 py-2">
            <div className="py-2">
                <Image priority className="rounded-full" src={user.avatar} width={100} height={100} loader={({ src, width, quality }) => {
                return `${src}?w=${width}&q=${quality || 75}`
            }}/>
                <h3 className="text-center text-xl font-bold">@{user.profile.username}</h3>
            </div>
            <p className="w-[90%] m-auto border-2 bg-slate-200 border-gray-400 px-3 rounded-md py-2">{user.Bio}</p>
            <div className="w-[90%]">
                <label htmlFor="name">Full Name</label>
                <p className="m-auto border-2 bg-slate-200 border-gray-400 px-3 rounded-md py-2">{user.profile.firstName} {user.profile.lastName}</p>
            </div>
            <div className="w-[90%]">
                <label htmlFor="job">Job Title</label>
                <p className="m-auto border-2 bg-slate-200 border-gray-400 px-3 rounded-md py-2">{user.jobTitle}</p>
            </div>
            <div className="w-[90%]">
                <label htmlFor="email">Email</label>
                <p className="m-auto border-2 bg-slate-200 border-gray-400 px-3 rounded-md py-2">{user.profile.email}</p>
            </div>
        </div>
    )
}

export default UserDetail