import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects1 from './Pages/Projects';
import Tasks1 from './Pages/Tasks';
import Contact1 from './Pages/Contact';
import Work1 from './Pages/Work';

function App() {
  return (
    <>
    <BrowserRouter >
    <div className='flex'>
      <div className=''>
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route path = '/' element={<Home />}> </Route>
          <Route path = '/about' element={<About />}> </Route>
          <Route path = '/projects' element={<Projects1 />}> </Route>
          <Route path = '/we' element={<Work1 />}> </Route>
          <Route path = '/tasks' element={<Tasks1 />}> </Route>
          <Route path = '/contact' element={<Contact1 />}> </Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
