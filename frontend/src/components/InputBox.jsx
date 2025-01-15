export const InputBox = ({label,placeholder,onChange})=>{
    return <div >
<div className="text-xl flex justify-start">{label}</div>
<input onChange={onChange} className="p-2 border-2 flex justify-start w-full rounded" type="text" placeholder={placeholder}></input>
    </div>
}