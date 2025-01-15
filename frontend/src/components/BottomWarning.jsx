import {Link} from 'react-router-dom';
export const BottomWarning = ({label,to,text})=>{
    return <div className='flex justify-center p-1'>
        <div className="font-bold p-1">
            {label}
        </div>
        <Link to={to}className='pointer p-1 underline '> {text}</Link>
    </div>
    
}