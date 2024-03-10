import { useContext } from 'react';
import { NotesContext } from '../Contexts/NotesContext';
import { useState } from 'react';
import './Notes.css'
import NotesContainer from './NotesContainer';
export default function Notes() {
  const { list,find,notes } = useContext(NotesContext);
  
  return (
    <div className='grid grid-cols-2 mx-52 '>
      {find==='' ? list.map((item, index) => (
       <NotesContainer item={item} key={index}/>
      )): notes.map((item,index)=>(  <NotesContainer item={item} key={index}/>)
    
      )}
    </div>
  );
}
