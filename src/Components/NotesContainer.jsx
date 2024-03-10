import { useState } from "react";
export default function NotesContainer({item,key}){
    const [color,setColor]=useState(false)

    const handleColor=()=>{
    setColor(!color);
    }

    function ColorChange(){
        let x=Math.floor(Math.random()*256)
        
        let y=Math.floor(Math.random()*256)
        let z=Math.floor(Math.random()*256)


        let val="rgb(" + x + ',' + y + ','+z +')';


        let v=`bg-[${val}]`;
return v;

    }

    return(

        <div key={key}  className={`max-w-sm mb-10 p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ${ColorChange()}`}>
        <div className='text-end text-xl font-bold'>
          <h3>{item.time}</h3>
        </div>

        <h5 className='mt-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{item.heading}</h5>

        <p className='mb-3 mt-6 font-normal text-gray-700 dark:text-gray-400'>{item.description}</p>

        <div className='text-end'>  <p className='text-3xl'>
            <i
              className={`fa-solid fa-star ${color ? 'active' : 'undefined'}`}
              onClick={handleColor}
            ></i>
          </p>
        </div>
      </div>


    )
}

