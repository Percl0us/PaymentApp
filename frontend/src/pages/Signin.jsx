import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return <div className=" h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="p-4 rounded-lg bg-slate-200 w-8- text-center">
                <Heading label={"Sign in"}></Heading>
                <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                <InputBox onChange={(e) => {
                    setUsername(e.target.value);
                    
                }} label={"Username"} placeholder={"abce@gmail.com"}></InputBox>
                <InputBox
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} label={"Password"} placeholder={"Ab@182&."}></InputBox>
                <Button onClick={async () => {
                    try {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                            username,
                            password
                        }, {
                            headers: {
                                'Content-Type': 'application/json', // Ensure the content type is set correctly
                            }
                        })
                        localStorage.setItem("token",response.data.token);
                        navigate("/dashboard")

                    }
                    catch (e) {
                        console.log(e.message);
                        alert("Invalid credentials")
                    }
                }} label={"Sign in"}></Button>
                <BottomWarning label={"Don't have an account? "} to={"/signup"} text={"signup"} ></BottomWarning>
            </div>
        </div>
    </div>
}