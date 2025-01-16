import { RecoilRoot } from "recoil";
import { AppBar } from "../components/AppBar";
import { Users } from "../components/Users";

export function Dashboard()
{
    return <div>
        
        <RecoilRoot>
            <AppBar></AppBar>
        
        <div>
       
    <Users></Users>
        </div></RecoilRoot>
    </div>
}