export const Button = ({label,onClick})=>{
    return <div className="pt-4">
        <button onClick={onClick} className="bg-black w-10/12 p-2 text-white rounded">{label}</button>
    </div>
}