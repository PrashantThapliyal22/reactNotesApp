import { useContext } from "react"
  import { NotesContext } from "../Contexts/NotesContext";
export default function Search(){
  
  const{Search,setFind}=useContext(NotesContext);
  function handleSearch(e){
    setFind(e.target.value)
    Search();
  }
    return(
        <div className="mt-12 mx-20">
            

    
    <div className="relative  w-full">
       
        <input type="text" onChange={handleSearch}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
     
    </div>
  


        </div>
    )
}