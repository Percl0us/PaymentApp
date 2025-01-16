import { useEffect, useState } from "react";
import { SmallButton } from "./SmallButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nowuserid } from "./atom";
export const Users = () => {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const useridvalue = useRecoilValue(nowuserid);
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter+"&id="+useridvalue).then(response => {
      setUsers(response.data.user);
    });
  }, [filter])
  return <div className="px-4 sm:px-14">
    <div className="font-bold text-lg ">Users</div>
    <div className="my-2">
      <input
      onChange={(e)=>{
        setFilter(e.target.value);
      }}
        type="text"
        placeholder="Search users..."
        className="border rounded border-slate-200 px-2 py-1 w-full"
      />
    </div>
    <div>
      {users.map(user => <User key={user._id} user={user}></User>)}
    </div>
  </div>
}
function User({ user }) {

  const navigate= useNavigate();
  return <div className="flex justify-between">
    <div className="flex">
      <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
        <div className="flex flex-col justify-center h-full text-xl">
          {user.firstName[0].toUpperCase()}
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
      onClick={(e)=>{
        navigate("/send?id="+user._id+"&name="+user.firstName);
      }}
        label={"Send Money"} />
    </div>
  </div>
}