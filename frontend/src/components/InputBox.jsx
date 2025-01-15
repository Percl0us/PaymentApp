export const InputBox = ({label,placeholder})=>{
    return <div >
<div className="text-xl flex justify-start">{label}</div>
<input className="p-2 border-2 flex justify-start w-full rounded" type="text" placeholder={placeholder}></input>
    </div>
}