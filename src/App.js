import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/pages/Home';
import Create from './components/pages/Create';
import View from './components/pages/View';
import Settings from './components/pages/Settings';
import Help from './components/pages/Help';

function App() {
  return (
    <>
      <div>
        <h2>Menu</h2>
        <ul>
          <ul><NavLink to='/'>Stencil</NavLink></ul>
          <ul><NavLink to='/create'>Create content</NavLink></ul>
          <ul><NavLink to='/view'>View content</NavLink></ul>
          <ul><NavLink to='/settings'>Settings</NavLink></ul>
          <ul><NavLink to='/help'>Help me</NavLink></ul>
        </ul>
      </div>

      <div>
        <h2>Content</h2>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/view' element={<View/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
          <Route path='/help' element={<Help/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
