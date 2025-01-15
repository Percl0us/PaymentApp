import { SmallButton } from "./SmallButton";

export const Users = ()=>{
    return  <div className="px-4 sm:px-14">
    <div className="font-bold text-lg ">Users</div>
    <div className="my-2">
      <input
       
        type="text"
        placeholder="Search users..."
        className="border rounded border-slate-200 px-2 py-1 w-full"
      />
    </div>
    <div>
      <User user={{
        firstName:"JOSH",
        lastName:"jj"
      }}></User>
    </div>
  </div>
}
function User({user}) {
    

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <SmallButton
             label={"Send Money"} />
        </div>
    </div>
}