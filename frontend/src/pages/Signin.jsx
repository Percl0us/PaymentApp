import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function Signin() {
    return <div className=" h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="p-4 rounded-lg bg-slate-200 w-8- text-center">
                <Heading label={"Sign in"}></Heading>
                <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                <InputBox label={"Username"} placeholder={"abce@gmail.com"}></InputBox>
                <InputBox label={"Password"} placeholder={"Ab@182&."}></InputBox>
                <Button label={"Sign in"}></Button>
                <BottomWarning label={"Don't have an account? "} to={"/signup"} text={"signup"} ></BottomWarning>
            </div>
        </div>
    </div>
}