import { createContext, useState } from "react";


export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [find, setFind] = useState('');
  const [notes, setNotes] = useState([])
  const [list, setList] = useState([]);

  const addValue = (value) => {
    setList((prev) => [...prev, value]);


  }
  console.log(find)
  function Search() {
    console.log("hlo");
    const findVal = list.filter((prev) => {
      return prev.heading.includes(find);
    });
    console.log(findVal);
    setNotes(findVal);
    console.log('hy');
  }

  const [sort, setSort] = useState('');

function Sorting() {
  if (sort === 'Ascending') {
    let sortedList = list.sort((x, y) => {
      let a = x.heading.toLowerCase();
      let b = y.heading.toLowerCase();
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    });
    setList(sortedList);
  } else if (sort === 'Descending') {
    let sortedList = list.sort((x, y) => {
      let a = x.heading.toLowerCase();
      let b = y.heading.toLowerCase();
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    setList(sortedList);
  }
}



  return (
    <NotesContext.Provider value={{ list, addValue, setFind, Search, notes, find,setSort,Sorting }}>
      {children}
    </NotesContext.Provider>
  )


}