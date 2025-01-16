import axios from "axios";
import { useEffect, useState } from "react"
import { useSetRecoilState } from "recoil";
import { nowuserid } from "./atom";
import { useNavigate } from "react-router-dom";
import { Balance } from "./Balance";


export const AppBar = () => {
    const [firstName, setFirstName] = useState(" ");
    const [balance, setBalance] = useState(0);
    const setuserid = useSetRecoilState(nowuserid);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            setFirstName(response.data.firstName);
            setBalance(response.data.balance);
            setuserid(response.data.userId)

        }
        fetchdata();
    }, []);

    return <div>
        <div className="w-full relative flex justify-between items-center shadow px-4 sm:px-14">
            <div className="text-xl sm:text-2xl font-bold">
                PayTM App
            </div>
            <div className="flex justify-between items-center relative">
                <div onClick={() => {
                    localStorage.removeItem("token");
                    navigate('/signin')
                }} className="cursor-pointer underline p-4">Sign Out</div>
                <div>Hello</div>
                <div className="rounded-full h-12 w-12 flex justify-center items-center bg-slate-300 ml-2 my-1">
                    <div className="flex flex-col justify-center h-full text-xl text-gray-600 font-bold ">
                        {firstName[0].toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
        <Balance balance={balance.toFixed(2)}></Balance>
    </div>
}