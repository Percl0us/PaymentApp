import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from 'axios';
export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return <div className=" h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="p-4 rounded-lg bg-slate-200 w-8- text-center">
                <Heading label={"Sign up"}></Heading>
                <SubHeading label={"Enter your information to create a new account"}></SubHeading>
                <InputBox label={"First Name"} placeholder={"Ramesh"} onChange={e => {
                    setFirstName(e.target.value);
                }}></InputBox>
                <InputBox onChange={e => {
                    setLastName(e.target.value);
                }} label={"Last Name"} placeholder={"Kumar"}></InputBox>
                <InputBox onChange={e => {
                    setUsername(e.target.value);
                }} label={"Email"} placeholder={"ar@gmail.com"}></InputBox>
                <InputBox onChange={e => {
                    setPassword(e.target.value);
                }} label={"Password"} placeholder={"Ab@182&."}></InputBox>
                <Button onClick={() => {
                    axios.post(" http://localhost:5173/user/sign-up",
                        {
                            username,
                            firstName,
                            lastName,
                            password
                        }
                    )
                }} label={"Sign up"}></Button>
                <BottomWarning label={"Already have an account?"} text={"signin"} to="/signin"></BottomWarning>
            </div>
        </div>
    </div>
}