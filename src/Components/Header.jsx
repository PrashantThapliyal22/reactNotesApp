import { NotesContext } from '../Contexts/NotesContext'
import Logo from '../assets/istockphoto-1313644269-612x612.jpg'
import { Context, useContext } from 'react'
export default function Header() {

    const {setSort,Sorting}=useContext(NotesContext)
    function handleSort(e){
        setSort(e.target.value)
        Sorting();
    }
    return (
        <div className='mt-4'>
            <div className="flex items-center justify-between mx-20">
                <div className='w-[60px] '>
                    <img src={Logo} className='rounded-full' />
                </div>


                <div>
                    <h2 className='text-xl font-semibold'>MY NOTES-APP</h2>
                </div>

                <div>
                    <select  onChange={handleSort}>
                        <option value=""></option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </div>
            </div>
        </div>
    )
}