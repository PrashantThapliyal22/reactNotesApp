
import React from 'react';
import ReactDOM from 'react-dom';
import Modals from './Components/Modals';
import Header from './Components/Header'
import Notes from './Components/Notes';
import Search from './Components/Search'
import { NotesProvider } from './Contexts/NotesContext';

export const App = () => {
  return (
    <>
    <NotesProvider>
<Header/>
<Search/>
      <Modals />
      <Notes />
    </NotesProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
