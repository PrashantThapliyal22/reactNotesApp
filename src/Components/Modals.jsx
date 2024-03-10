import { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
// import { useNotesContext } from '../Contexts/NotesContext';
import './Modals.css'

import { NotesContext, NotesProvider } from '../Contexts/NotesContext';


export default function Modals() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

 const {list,addValue}=useContext(NotesContext);
// const {list,addvalue}=useNotesContext();

    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');

  
    const handleHeading= (e)=>{
        setHeading(e.target.value);

}
    const handleDescription=(e)=>{
    setDescription(e.target.value);
    }


    const handleTime=(e)=>{
 setTime(e.target.value);
    }

    const handleData=()=>{

console.log('heheh');

        addValue({heading,description,time})
        setHeading('')
        setDescription('')
        setTime('')
    }

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    
    const modalRoot = document.getElementById('modal-root');

    return (
        <div>
            <div className='text-right mx-20 mt-10'>
                <button className='btn' onClick={handleOpenDialog}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>

            {isDialogOpen &&
                ReactDOM.createPortal(
                    <div className='dialbox'>
                        <dialog className='dbox' open style={{ display: 'block' }}>
                            <div className='text-center mt-5 '>
                                <h3 className='text-3xl text-white font-semibold mb-5'>Enter Notes Here</h3>
                                <input className='mb-5 w-[90%] px-4' type="text" value={heading} onChange={handleHeading} placeholder='Heading Here' />
                                <br />
                                <input type="text" className='mb-5 w-[90%] px-4' value={description} onChange={handleDescription} placeholder='Description Here' />
                                <input type="date" value={time} className='w-[90%] px-4' onChange={handleTime} />
                            </div>
                            <form method="dialog" className='absolute  bottom-3 mx-6'>
                                <button className='px-9  py-3 rounded-xl bg-blue-800' onClick={handleCloseDialog}>Close</button>
                            </form>
                            <div className='absolute right-7 bottom-3'>
                                <button className='px-9 rounded-xl py-3 bg-yellow-400' onClick={handleData} >Save Data</button>
                            </div>
                        </dialog>
                    </div>,
                    modalRoot
                )}
        </div>
    );
}
