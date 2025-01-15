import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function Signup()
{
    return <div className=" h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="p-4 rounded-lg bg-slate-200 w-8- text-center">
                <Heading label={"Sign up"}></Heading>
                <SubHeading label ={"Enter your information to create a new account"}></SubHeading>
                <InputBox label={"First Name"} placeholder={"Ramesh"}></InputBox>
                <InputBox label={"Last Name"} placeholder={"Kumar"}></InputBox>
                <InputBox label={"Email"} placeholder={"ar@gmail.com"}></InputBox>
                <InputBox label={"Password"} placeholder={"Ab@182&."}></InputBox>
                <Button label ={"Sign up"}></Button>
                <BottomWarning label={"Already have an account?"} text ={"signin"}to="/signin"></BottomWarning>
            </div>
        </div>
    </div>
}